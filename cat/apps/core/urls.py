from django.urls import path
from apps.core.views import (
    HomeView
)

urlpatterns = [
    path('', HomeView.as_view(), name="home_view")
]
