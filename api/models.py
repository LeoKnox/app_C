from django.db import models

class Room(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField()
    length = models.IntegerField()
    width = models.IntegerField()