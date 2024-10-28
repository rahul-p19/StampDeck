from django.shortcuts import render
from rest_framework import viewsets
from .models import Product, Customer
from .serializers import ProductSerializer, LoginSerializer

import requests
from django.http import JsonResponse
from django.conf import settings

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

class LoginView(APIView):
    queryset = Customer.objects.all()
    serializer_class = LoginSerializer
    def post(self, request):
        token = request.data.get("token")
        recaptcha_response = requests.post(
            "https://www.google.com/recaptcha/api/siteverify",
            data={"secret": settings.RECAPTCHA_SECRET_KEY, "response": token}
        ).json()
        
        if not recaptcha_response.get("success"):
            return Response({"error": "Invalid reCAPTCHA"}, status=status.HTTP_400_BAD_REQUEST)

        serializer = LoginSerializer(data=request.data)
        if serializer.is_valid():
            customer = serializer.validated_data['customer']
            request.session['customer_id'] = customer.id  
            return Response({"message": "Login successful"}, status=status.HTTP_200_OK)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

def index(request):
    context = { }
    return render(request, "index.html", context)
