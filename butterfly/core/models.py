from django.db import models
from uuid import uuid4
from datetime import datetime


class UUIDField(models.CharField):
    def __init__(self, *args, **kwargs):
        kwargs['max_length'] = kwargs.get('max_length', 32)
        kwargs['unique'] = kwargs.get('unique', True)
        kwargs['editable'] = kwargs.get('editable', False)
        kwargs['blank'] = kwargs.get('blank', True)
        models.CharField.__init__(self, *args, **kwargs)

    def pre_save(self, model_instance, add):
        if add and not getattr(model_instance, self.attname, False):
            value = str(uuid4().hex)
            setattr(model_instance, self.attname, value)
            return value
        else:
            return super(models.CharField, self).pre_save(model_instance, add)


class BaseModel(models.Model):
    DATETIME_FORMAT = "%Y-%m-%d %H:%M:%S"
    DATE_FORMAT = "%Y-%m-%d"

    uuid = UUIDField(primary_key=True, editable=False)
    created_date = models.DateTimeField("Created date", auto_now_add=True)
    last_updated_date = models.DateTimeField(
        "Last updated date", auto_now=True)

    class Meta:
        verbose_name = 'BaseModel'
        abstract = True

    def save(self, *args, **kwargs):
        self.last_updated_date = datetime.now()
        return super(BaseModel, self).save(*args, **kwargs)
