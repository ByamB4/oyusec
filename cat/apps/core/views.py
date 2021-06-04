from django.shortcuts import render
from django.views import View
from django.shortcuts import get_object_or_404
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from apps.api.views import BaseView
from apps.ctf.models import *
from apps.competition.models import (
    CompetitionUser
)
from apps.ctf.utils import *
from .serializers import AuthLoginSerializer
from .models import (
    BaseUser,
    BaseUserProfile
)
from .utils import *


class HomeView(View):
    context = {'title': 'API хуудас - OyuSec', }

    def get(self, request, *args, **kwargs):
        return render(request, 'Index.html', self.context)


class AdminChallenge(BaseView):
    def get(self, request, uuid):
        if not is_admin(request):
            return Response({'success': False, 'detail': ACCESS_DENIED})

        challenge = get_object_or_404(Challenge, uuid=uuid)
        response = self.serialize(challenge)

        return Response({'success': True, 'data': response})

    def post(self, request, uuid):
        if not is_admin(request):
            return Response({'success': False, 'detail': ACCESS_DENIED})

        # Check form security later
        challenge = get_object_or_404(Challenge, uuid=uuid)
        data = request.data.get('data', None)

        # if _type == 'delete':
        #     challenge.delete()
        #     return Response({'success': True, 'detail': SUCCESS_DELETE})

        challenge.name = data['name']
        challenge.category = data['category'].lower()
        challenge.description = data['description']
        challenge.state = get_state(data['state'])
        challenge.value = data['value']

        response = {
            'id': challenge.uuid,
            'name': challenge.name,
            'category': challenge.category,
            'description': challenge.description,
            'state': get_state(challenge.state),
            'value': challenge.value,
            'type': get_type(data['type'])
        }
        challenge.save()
        return Response({'success': True, 'detail': SUCCESS_UPDATED, 'challenge': response})

    def serialize(self, challenge):
        is_dynamic = DynamicChallenge.objects.filter(
            uuid=challenge.uuid).exists()
        hints = Hint.objects.filter(challenge=challenge)
        flags = Flag.objects.filter(challenge=challenge)
        tags = Tag.objects.filter(challenge=challenge)

        ret = {
            'id': challenge.uuid,
            'name': challenge.name,
            'description': challenge.description,
            'value': challenge.value,
            'category': challenge.category,
            'state': get_state(challenge.state),
            'attempts': challenge.max_attempts,
            'type': 'standard',
            'hints': [],
            'flags': [],
            'tags': []
        }

        if is_dynamic:
            ret['decay'] = challenge.dynamicchallenge.decay
            ret['minimum'] = challenge.dynamicchallenge.minimum
            ret['type'] = 'dynamic'

        for hint in hints:
            ret['hints'].append({
                'id': hint.uuid,
                'content': hint.content,
                'cost': hint.cost,
                'state': get_state(hint.state),
            })

        for flag in flags:
            ret['flags'].append({
                'id': flag.uuid,
                'content': flag.content
            })
        for tag in tags:
            ret['tags'].append({
                'id': tag.uuid,
                'content': tag.content
            })

        return ret


class AdminChallengeList(BaseView):

    def get(self, request):

        if not is_admin(request):
            return Response({'success': False, 'detail': ACCESS_DENIED})

        response = self.serialize(request.user)

        if len(response) == 0:
            return Response({'success': False, 'detail': 'Бодлого олдсонгүй'})

        return Response({'success': True, 'data': response})

    def serialize(self, user):
        dynamic_challenges = DynamicChallenge.objects.all()
        standard_challenges = StandardChallenge.objects.all()
        ret = []
        for challenge in standard_challenges:
            ret.append({
                'name': challenge.name,
                'value': challenge.value,
                'description': challenge.description,
                'id': challenge.uuid,
                'state': get_state(challenge.state),
                'category': challenge.category,
                'type': 'стандарт',
            })

        for challenge in dynamic_challenges:
            ret.append({
                'name': challenge.name,
                'value': challenge.value,
                'description': challenge.description,
                'id': challenge.uuid,
                'state': get_state(challenge.state),
                'category': challenge.category,
                'type': 'динамик',

            })
        return ret


class AdminChallengeDelete(BaseView):

    def post(self, request, uuid):
        if not is_admin(request):
            return Response({'success': False, 'detail': ACCESS_DENIED})

        # Check form security later
        challenge = get_object_or_404(Challenge, uuid=uuid)
        challenge.delete()
        return Response({'success': True, 'detail': SUCCESS_DELETED})


class AdminHint(BaseView):

    def post(self, request):
        if not is_admin(request):
            return Response({'success': False, 'detail': ACCESS_DENIED})

        _id = request.data.get('id', None)
        _type = request.data.get('type', None)
        data = request.data.get('data', None)

        if _type == 'add':
            challenge = get_object_or_404(Challenge, uuid=_id)
            hint = Hint.objects.create(
                challenge=challenge,
                content=data['content'],
                cost=data.get('value', ''),
                state=get_state(data.get('state', ''))
            )
            response = {
                'content': hint.content,
                'cost': hint.cost,
                'id': hint.uuid,
                'state': get_state(hint.state)
            }
            hint.save()
            return Response({'success': True, 'detail': SUCCESS_ADD, 'hint': response})

        elif _type == 'delete':
            hint = get_object_or_404(Hint, uuid=_id)
            hint.delete()
            return Response({'success': True, 'detail': SUCCESS_DELETED})


class AdminFlag(BaseView):

    def post(self, request):
        if not is_admin(request):
            return Response({'success': False, 'detail': ACCESS_DENIED})

        _id = request.data.get('id', None)
        _type = request.data.get('type', None)
        data = request.data.get('data', None)

        if _type == 'add':
            challenge = get_object_or_404(Challenge, uuid=_id)
            flag = Flag.objects.create(
                challenge=challenge,
                content=data['content'],
            )
            response = {
                'content': flag.content,
                'id': flag.uuid,
            }
            flag.save()
            return Response({'success': True, 'detail': SUCCESS_ADD, 'flag': response})

        elif _type == 'delete':
            flag = get_object_or_404(Flag, uuid=_id)
            flag.delete()
            return Response({'success': True, 'detail': SUCCESS_DELETED})


class AdminTag(BaseView):

    def post(self, request):
        if not is_admin(request):
            return Response({'success': False, 'detail': ACCESS_DENIED})

        _id = request.data.get('id', None)
        _type = request.data.get('type', None)
        data = request.data.get('data', None)

        if _type == 'add':
            challenge = get_object_or_404(Challenge, uuid=_id)
            tag = Tag.objects.create(
                challenge=challenge,
                content=data['content'],
            )
            response = {
                'content': tag.content,
                'id': tag.uuid,
            }
            tag.save()
            return Response({'success': True, 'detail': SUCCESS_ADD, 'tag': response})

        elif _type == 'delete':
            tag = get_object_or_404(Tag, uuid=_id)
            tag.delete()
            return Response({'success': True, 'detail': SUCCESS_DELETE})


class AdminChallengeAdd(BaseView):

    def post(self, request):
        user = request.user
        data = request.data['data']
        _type = request.data['type']
        if not is_admin(request):
            return Response({'success': False, 'detail': 'You dont have access to this resource'})

        if _type == 'standard':
            challenge = StandardChallenge.objects.create(
                name=data['name'],
                description=data['description'],
                value=data['value'],
                category=data['category'].lower(),
                state=get_state(data['state']),
            )
            flag = Flag.objects.create(
                challenge=challenge,
                content=data['flag']
            )
            response = {
                'id': challenge.uuid,
                'name': challenge.name,
                'category': challenge.category,
                'value': challenge.value,
                'state': get_state(challenge.state),
                'type': 'стандарт',
            }

            challenge.save()
            flag.save()

            return Response({'success': True, 'detail': SUCCESS_ADD, 'challenge': response})

        elif _type == 'dynamic':
            challenge = DynamicChallenge.objects.create(
                name=data['name'],
                description=data['description'],
                value=data['value'],
                category=data['category'].lower(),
                state=get_state(data['state']),
                minimum=data['minimum'],
                decay=data['decay'],
            )

            response = {
                'id': challenge.uuid,
                'name': challenge.name,
                'category': challenge.category,
                'value': challenge.value,
                'state': get_state(challenge.state),
                'type': 'динамик',
            }

            flag = Flag.objects.create(
                challenge=challenge,
                content=data['flag'],
            )

            challenge.save()
            flag.save()

            return Response({'success': True, 'detail': SUCCESS_ADD, 'challenge': response})
        return Response({'success': True})

    def serialize(self, data):
        # Check security later

        name = data.get('name', None)
        description = data.get('description', None)
        value = int(data.get('value', None))
        category = data.get('category', None)
        state = STATE_VISIBLE if data.get(
            'state', None) == 'Ил гаргах' else STATE_HIDDEN
        flag = data.get('flag', None)
        minimum = data.get('minimum', None)
        decay = data.get('decay', None)

        return {
            'name': name,
            'description': description,
            'value': value,
            'category': category,
            'state': state,
            'flag': flag,
            'minimum': minimum,
            'decay': decay,
        }


class AdminConfig(BaseView):

    def get(self, request):
        return Response({'success': True, 'data': 'soemone'})

    def post(self, request):
        user = request.user
        data = request.data['data']

        if not is_admin(request):
            return Response({'success': False, 'detail': ACCESS_DENIED})

        config = Config.objects.filter(key='competition_name').first()
        if config:
            config.value = data['name']
            config.save()
        else:
            Config.objects.create(
                key='competition_name',
                value=data['name']
            ).save()

        config = Config.objects.filter(key='competition_description').first()
        if config:
            config.value = data['description']
            config.save()
        else:
            Config.objects.create(
                key='competition_description',
                value=data['description']
            ).save()

        return Response({'success': True})


class AuthValid(BaseView):

    def post(self, request):
        username = request.data.get('username', None)
        email = request.data.get('email', None)

        # Checking exist or not
        if username:
            count = BaseUser.objects.filter(username=username).count()
            if count > 0:
                return Response({'success': False})
            return Response({'success': True})

        elif email:
            count = BaseUser.objects.filter(email=email).count()
            if count > 0:
                return Response({'success': False})
            return Response({'success': True})
        return Response({'success': True})


class AuthRegister(BaseView):

    def post(self, request):

        username = request.data.get('username')
        email = request.data.get('email')
        password = request.data.get('password')

        # Check valid will update later
        count_username = BaseUser.objects.filter(username=username).count()
        count_email = BaseUser.objects.filter(email=email).count()

        if count_username > 0:
            return Response({'sucess': False, 'detail': 'Нэр бүртгэлтэй байна'})

        if count_email > 0:
            return Response({'success': False, 'detail': 'Емэйл бүртгэлтэй байна'})

        # Creating account
        user = BaseUser.objects.create(
            username=username,
            email=email,
        )

        user.set_password(password)
        user.save()

        return Response({'success': True})


class AuthLogin(TokenObtainPairView):
    permission_classes = (AllowAny,)
    serializer_class = AuthLoginSerializer


class AuthRefresh(TokenRefreshView):
    pass


class AuthLogout(BaseView):
    permission_classes = (IsAuthenticated,)

    # Will implement this in future
    # def post(self, request):
    #     try:
    #         print(request.data)
    #         refresh_token = request.data["refresh_token"]
    #         token = RefreshToken(refresh_token)
    #         token.blacklist()

    #         return Response(status=status.HTTP_205_RESET_CONTENT)
    #     except Exception as e:
    #         return Response(status=status.HTTP_400_BAD_REQUEST)

    def get(self, request):
        return Response({'success': True})


class UserInfo(BaseView):

    def get(self, request):
        user = request.user
        if user.is_authenticated:
            response = self.serialize(user)

            return Response({'success': True, 'user': response})

        return Response({'success': False})

    def serialize(self, user):
        profile = BaseUserProfile.objects.get(user=user)

        return {
            'username': user.username,
            'id': user.uuid,
            'type': user.user_type,
            'slug': user.slug,
            'photo': user.photo,
            'fullname': profile.fullname,
        }


class UserProfile(BaseView):
    def get(self, request, slug):
        user = get_object_or_404(BaseUser, slug=slug)

        response = self.serialize(user)

        return Response({'success': True, 'data': response})

    def serialize(self, user):
        profile = BaseUserProfile.objects.get(user=user)
        score = Solve.get_score(user=user)
        value = Challenge.get_visible_challenges_value()

        ret = {
            'username': user.username,
            'fullname': profile.fullname,
            'score': score,
            'email': user.email,
            'type': user.user_type,
            'slug': user.slug,
            'photo': user.photo,
            'fullname': profile.fullname,
            'days': profile.get_days(),
            'progress': calculate_percentage(score, value),
            'socials': profile.get_socials(),
            'added_challenge': Challenge.get_total_added_challenge(_user=user),
            'competition_count': CompetitionUser.get_user_count(_user=user),
            'challenge_count': Solve.get_total_solved(_user=user),
            'competitions': CompetitionUser.get_history(_user=user),
            'challenges': Solve.get_solves(_user=user),
        }

        return ret


class UserEdit(BaseView):
    def post(self, request, id):
        user = BaseUser.objects.filter(uuid=id).first()
        profile = BaseUserProfile.objects.filter(user=user).first()

        data = request.data['data']

        if not request.user.is_authenticated and request.user != user:
            return Response({
                'success': False
            })
        if 'fullname' in data.keys():
            profile.fullname = data['fullname']
        if 'inst' in data.keys():
            profile.inst = data['inst']
        if 'face' in data.keys():
            profile.face = data['face']
        if 'github' in data.keys():
            profile.github = data['github']
        if 'twitter' in data.keys():
            profile.twitter = data['twitter']

        profile.save()

        return Response({
            'success': True,
            'data': {
                'fullname': profile.fullname,
                'socials': profile.get_socials(),
            }
        })


class UserSolves(BaseView):

    def get(self, request):
        """
        If user not authenticated then returns []
        """
        user = request.user
        response = []

        if not user.is_authenticated:
            return Response({'success': True, 'data': response})

        solves = Solve.objects.filter(
            user=user, challenge__competition=None, challenge__state__contains=STATE_VISIBLE)
        for solve in solves:
            response.append({
                'challenge_id': solve.challenge.uuid
            })
        return Response({'success': True, 'data': response})
