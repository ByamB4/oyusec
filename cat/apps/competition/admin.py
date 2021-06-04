from django.contrib import admin
from .models import (
    CompetitionAuthor,
    CompetitionUser,
    Competition,
)

admin.site.register(CompetitionAuthor)
admin.site.register(CompetitionUser)
admin.site.register(Competition)
