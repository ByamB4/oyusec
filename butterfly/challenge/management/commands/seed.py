from django.core.management.base import BaseCommand
from challenge.models import ChallengeState
from challenge.consts import CHALLENGE_STATES


class Command(BaseCommand):
    help = 'Seed database for development'

    def handle(self, *args, **kwargs):
        self.create_states()
        # self.create_categories()

    def create_states(self):
        for state in CHALLENGE_STATES:
            ChallengeState.objects.create(
                value=state
            )
        self.stdout.write("[+] Seed [challenge/states]")
