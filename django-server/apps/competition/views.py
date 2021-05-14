from django.shortcuts import get_object_or_404
from django.utils.timezone import localdate
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.renderers import JSONRenderer
from rest_framework.response import Response
from rest_framework.permissions import AllowAny, IsAuthenticated

from apps.core.models import (
    BaseUser,
    BaseUserProfile
)
from apps.core.utils import *
from apps.ctf.models import (
    Challenge,
    Solve
)
from apps.api.views import BaseView
from .models import (
    CompetitionUser,
    Competition,
)
from apps.ctf.consts import *
from .utils import *

from .consts import *


class Competitions(BaseView):
    def get(self, request):
        response = self.serialize()

        return Response({
            'success': True,
            'data': response
        })

    def serialize(self):
        result = {
            'live': [],
            'coming': [],
            'archive': []
        }
        for _ in Competition.objects.all():
            result[_.status].append({
                'name': _.name,
                'description': _.description,
                'id': _.uuid,
                'photo': _.photo,
                'slug': _.slug,
                'start_date': convert_to_localtime(_.start_date),
                'end_date': convert_to_localtime(_.end_date),
            })

        return result


class CompetitionView(BaseView):
    def get(self, request, slug):
        competition = get_object_or_404(Competition, slug=slug)
        response = self.serialize(competition)

        return Response({'success': True, 'data': response})

    def serialize(self, competition):
        result = {
            'name': competition.name,
            'description': competition.description,
            'slug': competition.slug,
            'photo': competition.photo,
            'rule': competition.rule,
            'prize': competition.prize,
            'location': competition.location,
            'weight': competition.weight,
            'enrollment': get_enrollment(competition.enrollment),
            'start_date': convert_to_localtime(competition.start_date),
            'end_date': convert_to_localtime(competition.end_date),
            'status': get_status(competition.status),
        }
        return result


class CompetitionChallenges(BaseView):
    def get(self, request, slug):
        competition = get_object_or_404(Competition, slug=slug)
        response = self.serialize(competition)

        return Response(response)

    def serialize(self, competition):
        challenges = []
        if competition.status == COMPETITION_COMING:
            return {
                'success': False
            }

        for challenge in Challenge.objects.filter(competition=competition, state__contains=STATE_VISIBLE):
            challenges.append({
                'author': {
                    'username': challenge.user.username,
                    'slug': challenge.user.slug,
                },
                'name': challenge.name,
                'value': challenge.value,
                'description': challenge.description,
                'id': challenge.uuid,
                'status': 'unsolved',
                'state': challenge.state,
                'category': challenge.category,
                'competition': True
            })
            # if challenge.category not in ret.keys():
            #     ret[challenge.category] = []

            # ret[challenge.category].append(data)
        return {
            'success': True,
            'data': challenges,
        }


class CompetitionChallengesSolves(BaseView):
    def get(self, request, slug):
        competition = get_object_or_404(Competition, slug=slug)

        challenges = Challenge.objects.filter(
            competition=competition,
            state=STATE_VISIBLE
        )
        response = self.serialize(challenges)

        return Response({'success': True, 'data': response})

    def serialize(self, challenges):
        ret = []
        for challenge in challenges:
            solves = Solve.objects.filter(challenge=challenge).count()
            ret.append({
                'challengeID': challenge.uuid,
                'solves': solves
            })
        return ret


class CompetitionScoreboard(BaseView):
    def get(self, request, slug):
        competition = get_object_or_404(Competition, slug=slug)
        standings = CompetitionUser.get_standings(_comp=competition)

        return Response({'success': True, 'data': standings})


class CompetitionComing(BaseView):
    def get(self, request):
        comp = Competition.objects.filter(
            status=COMPETITION_COMING).values('start_date', 'weight', 'name', 'enrollment', 'slug', 'uuid').order_by('start_date').first()
        if not comp:
            return Response({'success': False})
        return Response({'success': True, 'data': {
            'slug': comp['slug'],
            'id': comp['uuid'],
            'name': comp['name'],
            'weight': comp['weight'],
            'enrollment': comp['enrollment'],
            'start_date': convert_to_localtime(comp['start_date']),
        }})


class CompetitionUserSolves(BaseView):

    def get(self, request, slug):
        """
        If user not authenticated then returns []
        """
        user = request.user
        response = []

        if not user.is_authenticated:
            return Response({'success': True, 'data': response})

        comp = get_object_or_404(Competition, slug=slug)

        solves = Solve.objects.filter(
            user=user, challenge__competition=comp, challenge__state__contains=STATE_VISIBLE)

        for solve in solves:
            response.append({
                'challenge_id': solve.challenge.uuid
            })
        return Response({'success': True, 'data': response})
