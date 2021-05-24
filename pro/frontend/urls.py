from django.urls import path
from .views import index

urlpatterns = [
   path('index',index),
   path('one',index),
   path('join',index),
   path('create',index),
]
