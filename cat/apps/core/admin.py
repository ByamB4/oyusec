from django.contrib import admin
from .models import (
    BaseUser,
    BaseUserProfile,
)

admin.site.register(BaseUser)
admin.site.register(BaseUserProfile)
