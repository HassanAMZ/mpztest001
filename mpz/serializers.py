from rest_framework import serializers
from .models import Mobiledetail


class MobiledetailSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Mobiledetail
        fields = '__all__'
