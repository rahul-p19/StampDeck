from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework import status
from .models import Contact
from .serializers import ContactSerializer

class ContactViewSet(viewsets.ModelViewSet):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer

    def create(self, request, *args, **kwargs):
        print("Request Data:", request.data)  # Log request data
        serializer = self.get_serializer(data=request.data)
        
        # Validate and check errors
        if serializer.is_valid():
            self.perform_create(serializer)
            print("Response Data:", serializer.data)  # Log response data
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            print("Errors:", serializer.errors)  # Log validation errors
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
