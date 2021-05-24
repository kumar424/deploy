from django.urls import path
from .views import home,Data

urlpatterns = [
    path('',home),
    path('data',Data.as_view()),
]