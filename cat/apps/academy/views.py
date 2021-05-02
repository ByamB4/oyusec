from django.shortcuts import get_object_or_404
from django.db.models import Q
from apps.api.views import BaseView
from apps.core.consts import AUTHENTICATION_REQUIRED
from apps.ctf.consts import ALREADY_SOLVED, INCORRECT
from rest_framework.response import Response
from .models import *
from .utils import *


class Academies(BaseView):
    def get(self, request):

        return Response({
            'success': True,
            'data': self.serialize(req=request)
        })

    def serialize(self, req=None):
        res = []
        for ac in Academy.objects.filter(Q(status=ACADEMY_LIVE) | Q(status=ACADEMY_COMING)):
            res.append({
                'name': ac.name,
                'description': ac.description,
                'photo': ac.photo,
                'slug': ac.slug,
                'id': ac.uuid,
                'category': ac.category,
            })
        return res


class AcademyView(BaseView):
    def get(self, request, slug):
        academy = get_object_or_404(Academy, slug=slug)

        return Response({
            'success': True,
            'data': self.serialize(ac=academy, req=request)
        })

    def serialize(self, ac=None, req=None):
        res = {
            'sections': [],
        }
        for sec in Section.objects.filter(academy=ac):
            data = {
                'id': sec.uuid,
                'name': sec.name,
                'content': sec.content,
                'haveQuestion': False,
                'completed': False
            }
            if sec.question:
                data['haveQuestion'] = True
                data['question'] = sec.question
                data['hint'] = sec.hint

            if req.user.is_authenticated:
                secUser = SectionUser.objects.filter(
                    section=sec, user=req.user).first()
                if secUser:
                    data['completed'] = secUser.is_completed
            res['sections'].append(data)
        return res


class SectionView(BaseView):
    def post(self, request, uuid):
        sec = Section.objects.filter(uuid=uuid).first()

        if not request.user.is_authenticated:
            return Response({
                'success': False,
                'detail': AUTHENTICATION_REQUIRED
            })
        secUser = SectionUser.objects.filter(
            section=sec, user=request.user).first()
        if sec.question:
            if secUser:
                return Response({
                    'success': False,
                    'detail': ALREADY_SOLVED,
                })
            data = request.data['data']
            if sec.answer != data['question']:
                return Response({
                    'success': False,
                    'detail': INCORRECT
                })
            else:
                SectionUser.objects.create(
                    section=sec,
                    user=request.user,
                    is_completed=True
                )
                return Response({
                    'success': True,
                    'detail': f'Зөв байна! +{sec.point} оноо'
                })

        else:
            if secUser:
                return Response({
                    'success': False,
                    'detail': ALREADY_SOLVED,
                })
            else:
                SectionUser.objects.create(
                    section=sec,
                    user=request.user,
                    is_completed=True
                )
                return Response({
                    'success': True,
                    'detail': f'+{sec.point} оноо'
                })
