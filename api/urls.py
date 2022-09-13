from django.urls import path
from . import views

urlpatterns = [
    path('', views.ApiOverview, name='home'),
    path('create/', views.add_rooms, name='add-items'),
    path('all/', views.view_rooms, name='view_items'),
    path('room/<int:pk>/delete/', views.delete_rooms, name='delete-rooms'),
]