# Generated by Django 4.2.9 on 2024-01-30 16:06

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='user',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('phone_number', models.CharField(max_length=255)),
                ('e_mail', models.CharField(max_length=255)),
                ('gender', models.CharField(max_length=1)),
                ('marital', models.CharField(max_length=255)),
                ('salary', models.FloatField()),
                ('available_vacation', models.IntegerField()),
                ('actual_approved_vacations', models.IntegerField()),
                ('date', models.CharField(max_length=255)),
            ],
        ),
    ]
