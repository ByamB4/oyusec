from django.apps import AppConfig


class CtfConfig(AppConfig):
    name = 'apps.ctf'

    def ready(self):
        import apps.ctf.signals
