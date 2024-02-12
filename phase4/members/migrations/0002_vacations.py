# Generated by Django 4.2.9 on 2024-01-31 21:22

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('members', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='vacations',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('vacation_duration', models.IntegerField()),
                ('From', models.CharField(max_length=255)),
                ('To', models.CharField(max_length=255)),
                ('reason', models.CharField(max_length=255)),
                ('status', models.CharField(max_length=255)),
                ('employee_name', models.CharField(max_length=255)),
                ('employee_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='members.user')),
            ],
        ),
    ]
