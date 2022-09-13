from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import serializers, status
from .models import Room
from .serializers import RoomSerializer

@api_view(['GET'])
def ApiOverview(request):
    api_urls = {
        'all_items': '/',
        'Add': '/create',
        'Update': '/update/pk',
        'Delete': '/item/pk/delete'
    }

    return Response(api_urls)

@api_view(['POST'])
def add_rooms(request):
    room = RoomSerializer(data=request.data)

    if Room.objects.filter(**request.data).exists():
        raise serializers.ValidationError('This data already exists')

    if item.is_valid():
        room.save()
        return Response(item.data)
    else:
        return Response(status=status.HTTP_404_NOT_FOUND)

@api_view(['GET'])
def view_rooms(request):
    if request.query_params:
        rooms = Room.objects.filter(**request.query_param.dict())
    else:
        room = Room.objects.all()

    if rooms:
        data = RoomSerializer(rooms)
        return Response(data)
    else:
        return Response(status=status.HTTP_404_NOT_FOUND)