import pytz
from django.utils import timezone


def is_admin(request):
    if not request.user.is_authenticated or not request.user.user_type == 'admin':
        return False

    return True


def convert_to_localtime(utctime):

    fmt = '%Y-%m-%d %H:%M'

    utc = utctime.replace(tzinfo=pytz.UTC)
    localtz = utc.astimezone(timezone.get_current_timezone())
    return localtz.strftime(fmt)


def calculate_percentage(a, b):
    result = 0
    try:
        result = int(a / b * 100)
    except Exception as e:
        result = 0
    return result


def td_format(td_object):
    seconds = int(td_object.total_seconds())
    periods = [
        ('жил', 60*60*24*365),
        ('сар', 60*60*24*30),
        ('өдөр', 60*60*24),
        ('цаг', 60*60),
        ('мин', 60),
        ('сек', 1)
    ]

    strings = []
    for period_name, period_seconds in periods:
        if seconds > period_seconds:
            period_value, seconds = divmod(seconds, period_seconds)
            strings.append("%s %s" % (period_value, period_name))

    return " ".join(strings)
