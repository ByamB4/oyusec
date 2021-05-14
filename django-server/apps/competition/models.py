from django.db import models
from django.template.defaultfilters import slugify
from apps.core.models import (
    BaseModel,
    BaseUser,
)
from apps.ctf.models import (
    Solve
)
from .consts import *
from operator import itemgetter


class Competition(BaseModel):
    name = models.CharField('Name', max_length=100, default='OyuSec')
    description = models.TextField('Description', default='CTF')
    status = models.CharField('Status', choices=COMPETITION_STATUS_CHOICES,
                              max_length=100, default=COMPETITION_COMING)
    slug = models.SlugField(null=False, unique=True)
    photo = models.URLField(
        null=True, blank=True, default="https://github.com/OyuTech/Utils/blob/main/oyusec/oyusec.png")
    rule = models.TextField(default='')
    prize = models.TextField()
    participants = models.ManyToManyField(
        BaseUser,  through='CompetitionUser')
    location = models.CharField('Location', max_length=100, default='онлайн')
    enrollment = models.CharField(
        'Enrollment', max_length=100, default=ENROLLMENT_SOLO, choices=ENROLLMENT_CHOICES)
    start_date = models.DateTimeField(auto_now_add=False, blank=True)
    end_date = models.DateTimeField(auto_now_add=False, blank=True)
    weight = models.FloatField('Weight', default=20.0)

    class Meta:
        verbose_name = 'Competition'

    def __str__(self):
        return f'{self.name} | {self.status}'

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)
        return super(Competition, self).save(*args, **kwargs)

    @classmethod
    def calculate_result(cls, competition):
        participants = CompetitionUser.objects.filter(competition=competition)
        users = []

        for participant in participants:
            users.append({'user': participant, 'score': Solve.get_score(
                competition=competition, user=participant.user)})
        users = sorted(users, key=itemgetter('score'), reverse=True)
        total = len(users)
        # If zero participant
        if total <= 0:
            return
        max_score = users[0]['score']

        for _ in range(total):
            point = users[_]['score'] / max_score
            place = 1 / (_ + 1)
            rating = ((point + place) * competition.weight) / \
                (1 / (1 + _ // total))
            users[_]['user'].score = users[_]['score']
            users[_]['user'].rating = rating
            users[_]['user'].place = _ + 1
            users[_]['user'].save()


class CompetitionUser(BaseModel):
    user = models.ForeignKey(BaseUser, on_delete=models.CASCADE)
    competition = models.ForeignKey(Competition, on_delete=models.CASCADE)
    score = models.PositiveIntegerField('Score', default=0.0)
    rating = models.FloatField('Rating', default=0.0)
    place = models.PositiveIntegerField('Place', default=0)

    class Meta:
        verbose_name = 'Competition User'

    def __str__(self):
        return f'{self.user.username} | {self.competition.name}'

    @classmethod
    def get_standings(cls, _comp=None):
        res = []
        for compUser in cls.objects.filter(competition=_comp):
            score = Solve.get_score(
                user=compUser.user, competition=_comp)
            if not score:
                score = 0
            res.append({
                'username': compUser.user.username,
                'score': score
            })
        return sorted(res, key=itemgetter('score'), reverse=True)

    @classmethod
    def get_history(cls, _user):
        res = []
        for comp in cls.objects.filter(user=_user, competition__status=COMPETITION_ARCHIVE).order_by('-created_date'):
            res.append({
                'name': comp.competition.name,
                'place': comp.place,
                'rating': round(comp.rating, 2),
                'score': round(comp.score, 2),
            })

        return res

    @classmethod
    def get_user_count(cls, _user):
        return cls.objects.filter(user=_user, competition__status=COMPETITION_ARCHIVE).count()
