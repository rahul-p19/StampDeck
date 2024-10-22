from rest_framework import serializers
from .models import Product

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'

    def get_first_record(self):
        try:
            return Product.objects.first()
        except Product.DoesNotExist:
            return None

print(ProductSerializer().get_first_record())