from django.urls import path
from . import views

urlpatterns = [
    path('', views.ApiOverview, name='home'),
    path('create/', views.add_rooms, name='add-rooms'),
    path('all/', views.view_rooms, name='view_rooms'),
    path('update/<int:pk>', views.update_rooms, name='updates-rooms'),
    path('room/<int:pk>/delete/', views.delete_rooms, name='delete-rooms'),
]