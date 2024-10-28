from rest_framework import serializers
from .models import Product, Customer
from django.contrib.auth.hashers import check_password

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'

    def get_first_record(self):
        try:
            return Product.objects.first()
        except Product.DoesNotExist:
            return None

class LoginSerializer(serializers.Serializer):
    pda = serializers.CharField()
    password = serializers.CharField(write_only=True)

    def validate(self, data):
        try:
            customer = Customer.objects.get(pda=data['pda'])
        except Customer.DoesNotExist:
            raise serializers.ValidationError("Invalid PDA number or password")

        if not check_password(data['password'], customer.password):
            raise serializers.ValidationError("Invalid PDA number or password")
        
        data['customer'] = customer
        return data
