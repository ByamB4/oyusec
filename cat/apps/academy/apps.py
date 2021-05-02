from django.apps import AppConfig


class AcademyConfig(AppConfig):
    name = 'apps.academy'

    def ready(self):
        import apps.academy.signals
