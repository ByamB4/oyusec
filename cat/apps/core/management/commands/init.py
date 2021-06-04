from django.core.management.base import BaseCommand
from django.utils.timezone import make_aware
from datetime import datetime
from apps.core.models import BaseUser, BaseUserProfile
from apps.ctf.models import *
from apps.competition.models import *
from apps.core.consts import *
from apps.ctf.consts import *
from apps.competition.consts import *

# Misc
import random


class Command(BaseCommand):
    help = 'Initialize default values'

    def handle(self, *args, **kwargs):
        self.create_admin()
        self.create_users()

        self.create_competitions()
        self.create_challenges()
        self.create_flags()
        self.create_solves()
        self.create_requests()
        self.accept_requests()
        self.create_writeups()
        self.create_reactions()

        # Misc
        self.end_comps()

    def create_admin(self):
        BaseUser.objects.create_superuser(
            username=FAKE_ADMIN,
            email=FAKE_ADMIN_EMAIL,
            password=FAKE_PASSWORD,
        )

        self.stdout.write("[+] Created admin")

    def create_users(self):
        user = BaseUser.objects.create(
            username=FAKE_GUEST_USERNAME,
            email=FAKE_GUEST_EMAIL
        )
        user.set_password(FAKE_PASSWORD)
        user.save()

        for _ in range(30):
            user = BaseUser.objects.create(
                username=f'{FAKE_USER_USERNAME}{_}',
                email=f'{FAKE_USER_USERNAME}{_}@zxc.zxc',
            )
            user.set_password(FAKE_PASSWORD)
            user.save()

        self.stdout.write("[+] Created users")

    def create_competitions(self):

        for _ in range(10):
            rand_date = random.randint(1, 29)
            rand_hour = random.randint(0, 23)

            Competition.objects.create(
                name=f'{FAKE_COMPETITION_NAME} #{_}',
                description=FAKE_COMPETITION_DESCRIPTION,
                prize=FAKE_COMPETITION_PRIZE,
                rule=FAKE_COMPETITION_RULE,
                location=random.choice(FAKE_COMPETITION_LOCATIONS),
                enrollment=random.choice([ENROLLMENT_SOLO, ENROLLMENT_TEAM]),
                start_date=make_aware(
                    datetime(2021, 4, rand_date, rand_hour, 0)),
                end_date=make_aware(
                    datetime(2021, 4, rand_date + 1, rand_hour, 0)),
                photo=random.choice(FAKE_IMAGES),
                status=random.choice(FAKE_STATUS),
                weight=random.randint(20, 60)
            )

        self.stdout.write("[+] Created competitions")

    def create_challenges(self):

        # Public challenges
        for _ in range(30):
            DynamicChallenge.objects.create(
                name=f'{FAKE_CHALLENGE_NAME} {_}',
                category=random.choice(FAKE_CHALLENGE_CATEGORIES),
                description=FAKE_CHALLENGE_DESCRIPTION,
            )
        # Competition challenges
        for _ in range(40):
            DynamicChallenge.objects.create(
                name=f'{FAKE_COMPETITION_CHALLENGE_NAME} {_}',
                category=random.choice(FAKE_CHALLENGE_CATEGORIES),
                description=FAKE_CHALLENGE_DESCRIPTION,
                competition=random.choice(Competition.objects.all()),
                decay=random.randint(20, 50)
            )

        self.stdout.write("[+] Created challenges")

    def create_flags(self):
        # Makes all flag same
        for _ in Challenge.objects.all():
            Flag.objects.create(content=FAKE_FLAG, challenge=_)

        self.stdout.write('[+] Created flags')

    def create_solves(self):
        self.stdout.write('[+] Creating solves')

        for user in BaseUser.objects.filter(user_type=USER_TYPE_NORMAL):

            challenges_id = list(Challenge.objects.filter(
                state=STATE_VISIBLE).values_list('uuid', flat=True))
            solves_challenges = random.sample(
                challenges_id, min(len(challenges_id), random.randint(1, 30)))

            challenges = Challenge.objects.filter(uuid__in=solves_challenges)

            for challenge in challenges:
                if challenge.competition:
                    if challenge.competition.status == COMPETITION_COMING:
                        continue
                    CompetitionUser.objects.get_or_create(
                        user=user, competition=challenge.competition)

                Solve.objects.create(
                    user=user,
                    challenge=challenge,
                    submission=FAKE_FLAG
                )

        self.stdout.write('[+] Calculating dynamic values')

        for challenge in DynamicChallenge.objects.filter(state=STATE_VISIBLE):
            challenge.calculate_value(challenge)

    def create_requests(self):
        ind = 1

        for user in BaseUser.objects.filter(user_type=USER_TYPE_NORMAL)[:10]:
            chall = DynamicChallenge.objects.create(
                user=user,
                name=f'{FAKE_REQCHALLENGE_NAME} {ind}',
                description=FAKE_CHALLENGE_DESCRIPTION,
                category=random.choice(FAKE_CHALLENGE_CATEGORIES),
                solution=FAKE_SOLUTION,
                state=STATE_LOCKED,
            )

            Flag.objects.create(
                content=FAKE_FLAG,
                challenge=chall
            )
            ind += 1

        self.stdout.write("[+] Created challenge requests")

    def accept_requests(self):
        for chall in DynamicChallenge.objects.filter(state=STATE_LOCKED):
            chall.state = STATE_VISIBLE
            chall.save()

        self.stdout.write("[+] Accepted challenge requests")

    def end_comps(self):

        for competition in Competition.objects.filter(status=COMPETITION_ARCHIVE):
            competition.calculate_result(competition=competition)

        self.stdout.write('[+] Calculated competition_result')

    def create_writeups(self):

        for user in BaseUser.objects.all()[:5]:
            for chall in Challenge.objects.all()[:10]:
                wr = Writeup.objects.create(
                    author=user,
                    challenge=chall,
                    content=FAKE_WRITEUP_CONTENT,
                    state=STATE_VISIBLE,
                )
                if random.randint(0, 3) == 2:
                    WriteupCategory.objects.create(
                        writeup=wr,
                        content='crypto'
                    )
                    WriteupCategory.objects.create(
                        writeup=wr,
                        content='blockchain'
                    )
                else:
                    WriteupCategory.objects.create(
                        writeup=wr,
                        content='reversing'
                    )

            for _ in range(10):
                wr = Writeup.objects.create(
                    name=f'{FAKE_WRITEUP_NAME}{_}',
                    author=user,
                    content=FAKE_WRITEUP_CONTENT,
                    state=STATE_VISIBLE,
                )
                if random.randint(0, 3) == 2:
                    WriteupCategory.objects.create(
                        writeup=wr,
                        content='web'
                    )
                    WriteupCategory.objects.create(
                        writeup=wr,
                        content='assembly'
                    )
                else:
                    WriteupCategory.objects.create(
                        writeup=wr,
                        content='scripting'
                    )

        self.stdout.write('[+] Created writeups')

    def create_reactions(self):

        for user in BaseUser.objects.all()[20:30]:
            for writeup in Writeup.objects.all():
                if random.randint(0, 1):
                    WriteupUserReaction.objects.create(
                        author=user,
                        writeup=writeup,
                    )

        self.stdout.write('[+] Created reactions')
