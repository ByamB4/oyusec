# Generated by Django 3.2 on 2021-05-21 15:58

import apps.core.models
from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('competition', '0002_auto_20210426_1643'),
    ]

    operations = [
        migrations.CreateModel(
            name='CompetitionAuthor',
            fields=[
                ('uuid', apps.core.models.UUIDField(blank=True, editable=False, max_length=32, primary_key=True, serialize=False, unique=True)),
                ('created_date', models.DateTimeField(auto_now_add=True, verbose_name='Created date')),
                ('last_updated_date', models.DateTimeField(auto_now=True, verbose_name='Last updated date')),
                ('competition', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='competition.competition')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'verbose_name': 'Competition Author',
            },
        ),
    ]