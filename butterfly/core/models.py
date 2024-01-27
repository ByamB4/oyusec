from django.db import models
from django.contrib.auth.models import (
    AbstractUser,
    BaseUserManager
)
from uuid import uuid4
from .consts import *
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


class CustomUserManager(BaseUserManager):
    def create_user(self, email, username, password=None):
        if not email:
            raise ValueError('Users must have an email address')
        user = self.model(
            email=self.normalize_email(email),
            username=username,
            user_type='admin'
        )
        user.username = username
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, username, password=None):
        user = self.create_user(
            email,
            username,
            password=password,
        )
        user.is_admin = True
        user.is_staff = True
        user.is_superuser = True
        user.save(using=self._db)
        return user


class BaseUser(AbstractUser, BaseModel):
    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["username"]

    email = models.EmailField(max_length=100, unique=True, null=True)
    username = models.CharField(max_length=100, unique=True)
    user_type = models.CharField(
        max_length=100, default=USER_TYPE_NORMAL, choices=USER_TYPE_CHOICES)

    slug = models.SlugField(null=False, unique=True)
    photo = models.URLField(null=True, blank=True, default="")

    objects = CustomUserManager()

    class Meta:
        verbose_name = "User"

    def __str__(self):
        return f'{self.username} | {self.email} | {self.user_type}'

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.username)
        self.photo = 'http://gravatar.com/avatar/' + \
            md5(self.email.encode()).hexdigest()
        return super(BaseUser, self).save(*args, **kwargs)
