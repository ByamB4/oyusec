from django.utils import timezone
from django.db.models import Sum
from apps.ctf.models import Solve
from operator import itemgetter
from apps.ctf.consts import *

from .models import CompetitionUser
from .consts import *


def get_enrollment(data):
    if data == ENROLLMENT_SOLO:
        return ENROLLMENT_SOLO_MN
    elif data == ENROLLMENT_TEAM:
        return ENROLLMENT_TEAM_MN
    elif data == ENROLLMENT_SOLO_MN:
        return ENROLLMENT_SOLO
    elif data == ENROLLMENT_TEAM_MN:
        return ENROLLMENT_TEAM


def get_status(data):
    if data == COMPETITION_LIVE:
        return 'Шууд'
    elif data == COMPETITION_COMING:
        return 'Удахгүй'
    elif data == COMPETITION_ARCHIVE:
        return 'Дууссан'


def get_timeleft(data):
    return int((data - timezone.now()).total_seconds())


def get_days_hours_minutes(data):
    return data.days, data.seconds // 3600, (data.seconds // 60) % 60



def get_standings(competition):
    res = []
    for compUser in CompetitionUser.objects.filter(competition=competition):
        score = get_score(compUser.user, competition)
        if not score:
            score = 0
        res.append({
            'username': compUser.user.username,
            'score': score
        })
    return sorted(res, key=itemgetter('score'), reverse=True)
