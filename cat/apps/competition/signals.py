from django.db.models.signals import post_save
from django.dispatch import receiver
from .consts import *
from .models import (
    Competition,
)


@receiver(post_save, sender=Competition)
def competition_end(sender, instance, created, **kwargs):
    # If competition status becomes archive it means competition overs and we have to calculate result
    if instance.status == COMPETITION_ARCHIVE:
        instance.calculate_result(instance)
