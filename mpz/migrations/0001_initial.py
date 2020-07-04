# Generated by Django 3.0 on 2020-07-04 13:29

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Mobiledetail',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('brand', models.CharField(blank=True, max_length=200)),
                ('model', models.CharField(blank=True, max_length=200)),
                ('network_technology', models.CharField(blank=True, max_length=200)),
                ('twoG_bands', models.CharField(blank=True, max_length=200)),
                ('threeoG_bands', models.CharField(blank=True, max_length=200)),
                ('fourG_bands', models.CharField(blank=True, max_length=200)),
                ('network_speed', models.CharField(blank=True, max_length=200)),
                ('GPRS', models.CharField(blank=True, max_length=200)),
                ('EDGE', models.CharField(blank=True, max_length=200)),
                ('announced', models.CharField(blank=True, max_length=200)),
                ('status', models.CharField(blank=True, max_length=200)),
                ('dimentions', models.CharField(blank=True, max_length=200)),
                ('weight_g', models.CharField(blank=True, max_length=200)),
                ('weight_oz', models.CharField(blank=True, max_length=200)),
                ('SIM', models.CharField(blank=True, max_length=200)),
                ('display_type', models.CharField(blank=True, max_length=200)),
                ('display_resolution', models.CharField(blank=True, max_length=200)),
                ('display_size', models.CharField(blank=True, max_length=200)),
                ('OS', models.CharField(blank=True, max_length=200)),
                ('CPU', models.CharField(blank=True, max_length=200)),
                ('Chipset', models.CharField(blank=True, max_length=200)),
                ('GPU', models.CharField(blank=True, max_length=200)),
                ('memory_card', models.CharField(blank=True, max_length=200)),
                ('internal_memory', models.CharField(blank=True, max_length=200)),
                ('RAM', models.CharField(blank=True, max_length=200)),
                ('primary_camera', models.CharField(blank=True, max_length=200)),
                ('secondary_camera', models.CharField(blank=True, max_length=200)),
                ('loud_speaker', models.CharField(blank=True, max_length=200)),
                ('audio_jack', models.CharField(blank=True, max_length=200)),
                ('WLAN', models.CharField(blank=True, max_length=200)),
                ('bluetooth', models.CharField(blank=True, max_length=200)),
                ('GPS', models.CharField(blank=True, max_length=200)),
                ('NFC', models.CharField(blank=True, max_length=200)),
                ('radio', models.CharField(blank=True, max_length=200)),
                ('USB', models.CharField(blank=True, max_length=200)),
                ('sensors', models.CharField(blank=True, max_length=200)),
                ('battery', models.CharField(blank=True, max_length=200)),
                ('colors', models.CharField(blank=True, max_length=200)),
                ('approx_price_EUR', models.CharField(blank=True, max_length=200)),
                ('img_url', models.CharField(blank=True, max_length=200)),
                ('FIELD41', models.CharField(blank=True, max_length=200)),
            ],
        ),
    ]
