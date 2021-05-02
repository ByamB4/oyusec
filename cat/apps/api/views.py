from rest_framework import status
from rest_framework.views import APIView
from rest_framework.renderers import JSONRenderer
from rest_framework.response import Response


class BaseView(APIView):
    renderer_classes = [JSONRenderer]


class IsLive(BaseView):

    def get(self, request):
        return Response({'success': True})
