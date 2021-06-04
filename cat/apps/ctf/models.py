from django.db import models
from apps.core.models import (
    BaseModel,
    BaseUserProfile,
    BaseUser,
)

from math import ceil
from datetime import datetime, timedelta
from django.utils import timezone
from .consts import *


def get_admin():
    return BaseUser.objects.filter(username='admin').first()


class Challenge(BaseModel):
    REQUIRED_FIELDS = ['base_user']

    name = models.CharField("Name", max_length=30, unique=True)
    description = models.TextField("Description")
    value = models.PositiveIntegerField("Value", default=1000, null=True)
    user = models.ForeignKey(
        BaseUser, verbose_name='Author', on_delete=models.CASCADE, null=True, default=get_admin)

    category = models.CharField(
        "Category", max_length=100, null=True)
    state = models.CharField(
        "State", choices=STATE_CHOICES, max_length=100, default=STATE_VISIBLE)
    max_attempts = models.PositiveIntegerField("Max attempts", default=0)
    competition = models.ForeignKey(
        'competition.Competition',  on_delete=models.CASCADE, null=True, blank=True)
    solution = models.CharField(
        "Solution", default='', max_length=500, null=True, blank=True)

    class Meta:
        verbose_name = "Challenge"

    def __str__(self):
        return f"{self.name} |  {self.competition}"

    @classmethod
    def check_valid(cls, user, challenge, request):
        if challenge.user.username == user.username:
            return False, AUTHOR_CHALLENGE
        if Solve.objects.filter(user=user, challenge=challenge).exists():
            return False, ALREADY_SOLVED
        return True, NOT_SOLVED

    @ classmethod
    def attempt(cls, challenge, request):
        data = request.data
        submission = data['submission'].strip()
        flags = Flag.objects.filter(challenge=challenge)

        for flag in flags:
            if Flag.compare(flag, submission):
                return True, SUBMISSION_CORRECT_MN
            else:
                return False, SUBMISSION_WRONG_MN

        # This will happen if challenge have no flag
        # So returning false
        return False, SUBMISSION_WRONG_MN

    @ classmethod
    def solve(cls, user, challenge, request):
        data = request.data
        submission = data['submission'].strip()

        Solve.objects.create(
            user=user,
            challenge=challenge,
            submission=submission
        )

    @classmethod
    def get_total_added_challenge(cls, _user):
        return cls.objects.filter(user=_user, state=STATE_VISIBLE).count()

    @classmethod
    def get_visible_challenges_value(cls):
        result = Challenge.objects.filter(state=STATE_VISIBLE, competition=None).aggregate(
            models.Sum('value'))['value__sum']

        if not result:
            result = 0
        return result


class DynamicChallenge(Challenge):
    initial = models.PositiveIntegerField(
        "Initial value", default=1000, null=True)
    minimum = models.PositiveIntegerField(
        "Minimum value", default=100, null=True)
    decay = models.PositiveIntegerField("Decay", default=25, null=True)

    class Meta:
        verbose_name = 'Dynamic challenge'

    def save(self, *args, **kwargs):
        self.initial = self.value
        return super(DynamicChallenge, self).save(*args, **kwargs)

    @ classmethod
    def calculate_value(cls, challenge):
        solve_count = Solve.objects.filter(challenge=challenge).count()

        if solve_count != 0:
            solve_count -= 1

        value = (
            ((challenge.minimum - challenge.initial) / (challenge.decay ** 2))
            * (solve_count ** 2)
        ) + challenge.initial
        value = ceil(value)

        if value < challenge.minimum:
            value = challenge.minimum

        challenge.value = value
        challenge.save()

    @ classmethod
    def solve(cls, user, challenge, request):
        super().solve(user, challenge, request)

        DynamicChallenge.calculate_value(challenge)


class StandardChallenge(Challenge):

    class Meta:
        verbose_name = 'Standard challenge'


class Flag(BaseModel):
    challenge = models.ForeignKey(
        Challenge, on_delete=models.CASCADE)
    content = models.CharField('Content', max_length=100)

    class Meta:
        verbose_name = "Flag"

    def __str__(self):
        return f"Flag: {self.content} for {self.challenge.name}"

    # From CTFd
    @ staticmethod
    def compare(flag, provided):
        flag = flag.content

        if len(flag) != len(provided):
            return False

        result = 0

        for x, y in zip(flag, provided):
            result |= ord(x) ^ ord(y)
        return result == 0


class Tag(BaseModel):
    REQUIRED_FIELDS = ["challenge"]
    challenge = models.ForeignKey(Challenge, on_delete=models.CASCADE)
    content = models.CharField(max_length=80)

    class Meta:
        verbose_name = "Tag"

    def __str__(self):
        return f"{self.challenge.name} | {self.content}"


class Submission(BaseModel):
    REQUIRED_FIELDS = ["base_user", "challenge"]

    user = models.ForeignKey(
        BaseUser, verbose_name="User", on_delete=models.CASCADE)
    challenge = models.ForeignKey(
        Challenge, verbose_name="Challenge", on_delete=models.CASCADE)
    submission = models.TextField("Submission")

    class Meta:
        verbose_name = "Submission"

    def __str__(self):
        return f'{self.user.username} | {self.challenge.name} | {self.submission}'


class Solve(Submission):

    class Meta:
        verbose_name = "Solve"

    def __str__(self):
        return f"{self.user.username} | {self.challenge.name}"

    @ classmethod
    def get_score(cls, user, competition=None):
        result = cls.objects.filter(user=user, challenge__state__contains=STATE_VISIBLE, challenge__competition=competition).aggregate(
            models.Sum('challenge__value'))['challenge__value__sum']

        if not result:
            result = 0
        return result

    @ classmethod
    def get_total_solved(cls, _user, competition=None):
        return cls.objects.filter(
            user=_user, challenge__state__contains=STATE_VISIBLE, challenge__competition=competition).count()

    @classmethod
    def get_solves(cls, _user=None, _competition=None):

        solves = cls.objects.filter(
            user=_user, challenge__competition=_competition, challenge__state=STATE_VISIBLE).order_by('-created_date')
        res = []

        for solve in solves:
            res.append({
                'created': solve.created_date.strftime('%d %B, %H:%M'),
                'name': solve.challenge.name,
                'category': solve.challenge.category,
                'value': solve.challenge.value,
            })

        return res


class Hint(BaseModel):
    REQUIRED_FIELDS = ['challenge']

    challenge = models.ForeignKey(
        Challenge, verbose_name="Challenge", on_delete=models.CASCADE)
    content = models.CharField("Content", max_length=100)
    state = models.CharField("State", choices=STATE_CHOICES,
                             max_length=100, default=STATE_VISIBLE)
    cost = models.PositiveIntegerField("Cost", default=0)

    class Meta:
        verbose_name = "Hint"

    def __str__(self):
        return f'{self.challenge.name} | {self.content}'


class Writeup(BaseModel):
    REQUIRED_FIELDS = ['challenge']

    challenge = models.ForeignKey(
        Challenge, verbose_name='Challenge', on_delete=models.CASCADE, null=True, blank=True)
    state = models.CharField(
        "State", choices=STATE_CHOICES, max_length=100, default=STATE_HIDDEN)
    name = models.CharField("Name", max_length=100, null=True, blank=True)
    thumbnail = models.URLField(
        null=True, blank=True, default='https://avatars.githubusercontent.com/u/77679907?v=4')
    views = models.PositiveIntegerField(default=0)
    author = models.ForeignKey(
        BaseUser, verbose_name='Author', on_delete=models.CASCADE, related_name='author')
    content = models.TextField('Content')

    class Meta:
        verbose_name = 'Writeup'

    def __str__(self):
        if self.challenge:
            return f'{self.author.username} | {self.challenge.name} | {self.state}'
        else:
            return f'{self.author.username} | {self.name} | {self.state}'


class WriteupCategory(BaseModel):

    writeup = models.ForeignKey(
        Writeup, verbose_name='Writeup', on_delete=models.CASCADE)
    content = models.CharField(max_length=100, null=False, blank=False)

    class Meta:
        verbose_name = 'WriteupCategory'

    def __str__(self):
        return f'{self.content} | {self.writeup}'


class WriteupUserReaction(BaseModel):
    author = models.ForeignKey(
        BaseUser, verbose_name='Writeup User', on_delete=models.CASCADE, null=True, related_name='writeup_user')
    writeup = models.ForeignKey(
        Writeup, verbose_name='Writeup', on_delete=models.CASCADE)

    class Meta:
        verbose_name = 'Writeup User Reaction'

    def __str__(self):
        return f'{self.author.username} | {self.writeup}'
