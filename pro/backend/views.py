from django.shortcuts import render
from django.http import HttpResponse
from .models import Book
from .serializers import BookSerializers
from rest_framework import generics,status
from rest_framework.views import APIView
from rest_framework.response import Response
# Create your views here.
def home(request):
    return HttpResponse('<h1>this is backend page</h1>')

class Data(generics.CreateAPIView):
    queryset = Book.objects.all()
    serializer_class = BookSerializers
