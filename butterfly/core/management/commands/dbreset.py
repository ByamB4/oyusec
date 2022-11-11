from django.core.management.base import BaseCommand
from challenge.models import ChallengeState


class Command(BaseCommand):
    help = 'Reset database for development'

    def handle(self, *args, **kwargs):
        ChallengeState.objects.all().delete()
