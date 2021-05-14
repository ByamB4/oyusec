from django.contrib import admin
from .models import (
    CompetitionUser,
    Competition,
)

admin.site.register(CompetitionUser)
admin.site.register(Competition)
