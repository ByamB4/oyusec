from django.urls import path
from apps.api.views import IsLive
from apps.core.views import *
from apps.ctf.views import *
from apps.competition.views import *
from apps.academy.views import *

urlpatterns = [
    path('challenges/', ChallengeList.as_view()),
    path('challenge/<str:uuid>/', ChallengeView.as_view()),
    path('challenge/<str:uuid>/solves/', ChallengeSolves.as_view()),
    path('challenges/attempt/', ChallengeAttempt.as_view()),
    path('challenges/solves/', ChallengesSolves.as_view()),
    path('challenges/request/', ChallengeRequest.as_view()),
    path('challenges/writeups/<str:uuid>/', Writeups.as_view()),
    path('challenges/today/top/', TodayTop.as_view()),

    # AUTHENTICATION
    path('auth/register/', AuthRegister.as_view()),
    path('auth/valid/', AuthValid.as_view()),
    path('auth/login/', AuthLogin.as_view()),
    path('auth/logout/', AuthLogout.as_view()),
    path('auth/refresh/', AuthRefresh.as_view()),

    # USER
    path('user/me/', UserInfo.as_view()),
    path('user/edit/<str:id>/', UserEdit.as_view()),
    path('user/solves/', UserSolves.as_view()),
    path('user/profile/<slug:slug>/', UserProfile.as_view()),

    # ADMIN
    path('admin/challenges/', AdminChallengeList.as_view()),
    path('admin/challenges/add/', AdminChallengeAdd.as_view()),
    path('admin/challenge/<str:uuid>/', AdminChallenge.as_view()),
    path('admin/challenge/<str:uuid>/delete/', AdminChallengeDelete.as_view()),
    path('admin/hint/', AdminHint.as_view()),
    path('admin/flag/', AdminFlag.as_view()),
    path('admin/tag/', AdminTag.as_view()),
    path('admin/config/', AdminConfig.as_view()),

    # COMPETITION
    path('competitions/', Competitions.as_view()),
    path('competitions/coming/', CompetitionComing.as_view()),
    path('competition/<str:slug>/', CompetitionView.as_view()),
    path('competition/<str:slug>/challenges/', CompetitionChallenges.as_view()),
    path('competition/<str:slug>/scoreboard/', CompetitionScoreboard.as_view()),
    path('competition/<str:slug>/challenges/solves/',
         CompetitionChallengesSolves.as_view()),
    path('competition/<str:slug>/challenges/user/solves/',
         CompetitionUserSolves.as_view()),

    # ACADEMY
    path('academy/tutorials/', Academies.as_view()),
    path('academy/tutorial/<str:slug>/', AcademyView.as_view()),
    path('academy/section/<str:uuid>/', SectionView.as_view()),

    # WRITEUP
    path('writeups/', WriteupList.as_view()),
    path('writeup/<str:id>/', WriteupView.as_view()),
    # MISC
    path('live/', IsLive.as_view()),
    path('scoreboard/', Scoreboard.as_view()),
]
