from django.db import models
from django.template.defaultfilters import slugify
from apps.core.models import BaseModel, BaseUser
from .consts import *


class Academy(BaseModel):
    name = models.CharField('Name', max_length=100, unique=True, blank=False)
    description = models.TextField('Description', default='CTF', blank=False)
    status = models.CharField('Status', choices=ACADEMY_STATUS_CHOICES,
                              max_length=100, default=ACADEMY_LIVE)
    slug = models.SlugField(null=False, unique=True)
    photo = models.URLField(
        null=True, blank=True, default="https://github.com/OyuTech/Utils/blob/main/oyusec/oyusec.png")
    category = models.CharField(
        'Category', choices=ACADEMY_CATEGORY_CHOICES, max_length=100, default=ACADEMY_CATEGORY_CTF)

    class Meta:
        verbose_name = 'Academy'

    def __str__(self):
        return f'{self.name} | {self.description}'

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)
        return super(Academy, self).save(*args, **kwargs)


class AcademyUser(BaseModel):
    user = models.ForeignKey(BaseUser, on_delete=models.CASCADE)
    academy = models.ForeignKey(Academy, on_delete=models.CASCADE)

    class Meta:
        verbose_name = 'Academy User'

    def __str__(self):
        return f'{self.user.username} | {self.academy.name}'


class Section(BaseModel):
    name = models.CharField('Name', max_length=100, blank=False)
    academy = models.ForeignKey(
        Academy, on_delete=models.CASCADE, null=True, blank=True)
    content = models.TextField('Content', blank=True, null=True)
    question = models.CharField(
        "Question", max_length=100, blank=True, null=True)
    answer = models.CharField("Answer", max_length=100, blank=True, null=True)
    point = models.PositiveIntegerField(
        "Point", default=0, null=False, blank=False)
    hint = models.CharField("Hint", max_length=100, blank=True, null=True)

    class Meta:
        verbose_name = 'Section'

    def __str__(self):
        return f'{self.name} | {self.academy.name}'


class SectionUser(BaseModel):
    section = models.ForeignKey(Section, on_delete=models.CASCADE)
    user = models.ForeignKey(BaseUser, on_delete=models.CASCADE)
    is_completed = models.BooleanField(default=False)

    class Meta:
        verbose_name = 'Section User'

    def __str__(self):
        return f'{self.user.username} | {self.section.name}'
