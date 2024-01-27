from django.core.management.base import BaseCommand
from challenge.models import ChallengeState
from challenge.consts import CHALLENGE_STATES
from core.models import BaseUser, BaseUserProfile


class Command(BaseCommand):
    help = 'Create admin account for development'

    def handle(self, *args, **kwargs):
        self.create_admin()

    def create_admin(self):
        BaseUser.objects.create_superuser(
            username=FAKE_ADMIN,
            email=FAKE_ADMIN_EMAIL,
            password=FAKE_PASSWORD,
        )

        self.stdout.write("[+] Created admin")