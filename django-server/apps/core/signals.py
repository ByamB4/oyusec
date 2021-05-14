from django.db.models.signals import post_save
from django.dispatch import receiver
from .models import (
    BaseUser,
    BaseUserProfile
)


@receiver(post_save, sender=BaseUser)
def create_user_profile(sender, instance, created, **kwargs):
    if created:
        BaseUserProfile.objects.create(
            user=instance,
            fullname=instance.username,
        )
