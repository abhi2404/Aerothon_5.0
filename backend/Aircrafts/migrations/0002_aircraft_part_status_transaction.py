# Generated by Django 4.0.5 on 2023-05-12 23:13

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('Aircrafts', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='aircraft_part',
            name='status',
            field=models.BooleanField(default=1),
        ),
        migrations.CreateModel(
            name='Transaction',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('timestamp', models.DateTimeField(auto_now_add=True)),
                ('aircraft_part', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Aircrafts.aircraft_part')),
                ('buyer_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]