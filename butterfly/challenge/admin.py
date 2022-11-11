from django.contrib import admin
from .models import Challenge, ChallengeState

admin.site.register(ChallengeState)
admin.site.register(Challenge)
