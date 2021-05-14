from django.apps import AppConfig


class CompetitionConfig(AppConfig):
    name = 'apps.competition'

    def ready(self):
        import apps.competition.signals
