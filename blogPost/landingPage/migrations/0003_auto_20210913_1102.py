# Generated by Django 3.1.5 on 2021-09-13 05:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('landingPage', '0002_auto_20210912_2239'),
    ]

    operations = [
        migrations.AlterField(
            model_name='create_new',
            name='id',
            field=models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
    ]
