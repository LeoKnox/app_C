from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import serializers, status
from django.shortcuts import get_object_or_404
from .models import Room
from .serializers import RoomSerializer

@api_view(['GET'])
def ApiOverview(request):
    api_urls = {
        'all_items': '/',
        'Add': '/create',
        'Update': '/update/pk',
        'Delete': '/item/pk/delete',
        'Single': '/item/room/pk'
    }

    return Response(api_urls)

@api_view(['GET'])
def show_room(request, pk):
    snippet = get_object_or_404(Room, pk=pk)
    #snippet = Room.objects.get(pk=pk)
    room = RoomSerializer(snippet)
    print('***',room)
    return Response(room.data)


@api_view(['POST'])
def add_rooms(request):
    room = RoomSerializer(data=request.data)

    if Room.objects.filter(**request.data).exists():
        raise serializers.ValidationError('This data already exists')

    if room.is_valid():
        room.save()
        return Response(room.data)
    else:
        return Response(status=status.HTTP_404_NOT_FOUND)

@api_view(['GET'])
def view_rooms(request):
    if request.query_params:
        rooms = Room.objects.filter(**request.query_param.dict())
    else:
        rooms = Room.objects.all()
        serializer = RoomSerializer(rooms, many=True)

    if rooms:
        data = RoomSerializer(rooms)
        return Response(serializer.data)
    else:
        return Response(status=status.HTTP_404_NOT_FOUND)

@api_view(['PUT'])
def update_rooms(request, pk):
    room = Room.objects.get(pk=pk)
    data = RoomSerializer(instance=room, data=request.data)

    if data.is_valid():
        data.save()
        return Response(data.data)
    else:
        return Response(status=status.HTTP_404_NOT_FOUND)

@api_view(['DELETE'])
def delete_rooms(request, pk):
    room = get_object_or_404(Room, pk=pk)
    room.delete()
    return Response(status = status.HTTP_202_ACCEPTED)