from django.urls import path
from . import views

urlpatterns = [
    path('my-page/', views.get_main, name='My-Page'),
]