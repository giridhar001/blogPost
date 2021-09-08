# Application level urls

from django.urls import path
from . import views

urlpatterns = [
    path('', views.landingPage),
    path('createPost/', views.createPost),
]
