from django.db import models
from core.models import BaseModel


class ChallengeState(BaseModel):
    value = models.CharField("State", max_length=100, unique=True)

    class Meta:
        verbose_name = 'State'

    def __str__(self):
        return f"{self.value}"


class Challenge(BaseModel):
    name = models.CharField("Name", max_length=100, unique=False)
    description = models.TextField("Description")
    value = models.IntegerField("Value", default=100, null=False)
    state = models.ForeignKey(
        ChallengeState, verbose_name="State", null=True, on_delete=models.SET_NULL)

    class Meta:
        verbose_name = 'Challenge'

    def __str__(self):
        return f'{self.name} - {self.description}'
