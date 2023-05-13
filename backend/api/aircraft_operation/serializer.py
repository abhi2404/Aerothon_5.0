from pyexpat import model
from rest_framework import serializers
from Aircrafts.models import Aircraft_Part , Transaction


class Aircraft_data_serializer(serializers.ModelSerializer):
    class Meta:
        model = Aircraft_Part
        exclude = ('status','added_by')


class TransactionSerializer(serializers.ModelSerializer):

    class Meta:
        model=  Transaction
        fields= '__all__'
        read_only_fields = ('buyer_id','aircraft_part')

        
