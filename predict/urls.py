from django.urls import path
from . import views

app_name = 'predict'

urlpatterns = [
    path('api/predict', views.is_poisonous)
]
