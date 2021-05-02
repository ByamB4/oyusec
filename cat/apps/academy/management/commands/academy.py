from django.core.management.base import BaseCommand
from apps.academy.models import *
from apps.core.models import BaseUser
from apps.academy.consts import *
# Misc
import random


class Command(BaseCommand):
    help = 'Initialize default academies'

    def handle(self, *args, **kwargs):
        self.create_academies()
        self.create_sections()
        self.create_academy_users()
        self.create_section_users()

    def create_academies(self):
        for _ in range(10):
            Academy.objects.create(
                name=f'{FAKE_ACADEMY_NAME}-{_}',
                description=f'{FAKE_ACADEMY_DESCRIPTION}',
                photo=random.choice(FAKE_ACADEMY_IMAGES),
                slug=f'academy-{_}',
                category=random.choice(ACADEMY_CATEGORY_CHOICES)[0]
            )
        print('[+] Created academies')

    def create_sections(self):
        ind = 1
        for ac in Academy.objects.all():
            for _ in range(random.randint(1, 20)):
                if random.randint(0, 1):
                    Section.objects.create(
                        name=f'{FAKE_SECTION_NAME}-{ind}',
                        academy=ac,
                        content=f'{random.choice(FAKE_SECTION_CONTENT)}\n<h3 class="text-center text-uppercase"> Dynamically generated {_} </h3>',
                        question=f'{FAKE_SECTION_QUESTION}',
                        hint=f'{FAKE_SECTION_HINT}',
                        point=random.randint(10, 100),
                        answer=f'{FAKE_SECTION_ANSWER}'
                    )
                else:
                    Section.objects.create(
                        name=f'{FAKE_SECTION_NAME}-{ind}',
                        academy=ac,
                        content=f'{random.choice(FAKE_SECTION_CONTENT)}\n<h3 class="text-center text-uppercase> Dynamically generated {_} </h3>',
                    )
                ind += 1
        print('[+] Created sections')

    def create_academy_users(self):
        for _ in range(50):
            us = BaseUser.objects.all()[random.randint(1, 29)]
            ac = Academy.objects.all()[random.randint(1, 9)]
            AcademyUser.objects.create(
                user=us,
                academy=ac,
            )
        print('[+] Created academy users')

    def create_section_users(self):
        for _ in range(50):
            us = BaseUser.objects.all()[random.randint(1, 29)]
            se = Section.objects.all()[random.randint(1, 49)]
            SectionUser.objects.create(
                section=se,
                user=us,
                is_completed=True,
            )
        print('[+] Created section users')
