from django.db import models


class Student(models.Model):
    name = models.CharField("Name", max_length=240)
    email = models.EmailField()
    document = models.CharField("Document", max_length=20)
    phone = models.CharField(max_length=20)
    registrationDate = models.DateField("Registration Date", auto_now_add=True)

    def __str__(self):
        return self.name


class Mobiledetail(models.Model):
    brand = models.CharField(max_length=200, blank=True)
    model = models.CharField(max_length=200, blank=True)
    network_technology = models.CharField(max_length=200, blank=True)
    twoG_bands = models.CharField(max_length=200, blank=True)
    threeoG_bands = models.CharField(max_length=200, blank=True)
    fourG_bands = models.CharField(max_length=200, blank=True)
    network_speed = models.CharField(max_length=200, blank=True)
    GPRS = models.CharField(max_length=200, blank=True)
    EDGE = models.CharField(max_length=200, blank=True)
    announced = models.CharField(max_length=200, blank=True)
    status = models.CharField(max_length=200, blank=True)
    dimentions = models.CharField(max_length=200, blank=True)
    weight_g = models.CharField(max_length=200, blank=True)
    weight_oz = models.CharField(max_length=200, blank=True)
    SIM = models.CharField(max_length=200, blank=True)
    display_type = models.CharField(max_length=200, blank=True)
    display_resolution = models.CharField(max_length=200, blank=True)
    display_size = models.CharField(max_length=200, blank=True)
    OS = models.CharField(max_length=200, blank=True)
    CPU = models.CharField(max_length=200, blank=True)
    Chipset = models.CharField(max_length=200, blank=True)
    GPU = models.CharField(max_length=200, blank=True)
    memory_card = models.CharField(max_length=200, blank=True)
    internal_memory = models.CharField(max_length=200, blank=True)
    RAM = models.CharField(max_length=200, blank=True)
    primary_camera = models.CharField(max_length=200, blank=True)
    secondary_camera = models.CharField(max_length=200, blank=True)
    loud_speaker = models.CharField(max_length=200, blank=True)
    audio_jack = models.CharField(max_length=200, blank=True)
    WLAN = models.CharField(max_length=200, blank=True)
    bluetooth = models.CharField(max_length=200, blank=True)
    GPS = models.CharField(max_length=200, blank=True)
    NFC = models.CharField(max_length=200, blank=True)
    radio = models.CharField(max_length=200, blank=True)
    USB = models.CharField(max_length=200, blank=True)
    sensors = models.CharField(max_length=200, blank=True)
    battery = models.CharField(max_length=200, blank=True)
    colors = models.CharField(max_length=200, blank=True)
    approx_price_EUR = models.CharField(max_length=200, blank=True)
    img_url = models.CharField(max_length=200, blank=True)
    FIELD41 = models.CharField(max_length=200, blank=True)

    def __str__(self):
        return self.brand
