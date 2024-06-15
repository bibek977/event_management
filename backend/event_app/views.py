from django.shortcuts import render
from .utils import *
from rest_framework import viewsets,permissions
from .serializers import *
from rest_framework.response import Response
from django.contrib.auth import get_user_model,authenticate
from knox.models import AuthToken

User = get_user_model()

class EventViewset(viewsets.ViewSet):
    permission_classes = [permissions.AllowAny]
    serializer_class = EventSerializer

    def get(self,request):
        data = list_events()
        return Response({'data':data})

    def create(self, request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"data": serializer.data})
        else:
            return Response({"error": serializer.errors})

    def update(self, request, pk=None):
        id = int(pk)
        instance = read_event(id)
        serializer = self.serializer_class(instance=instance, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"data": serializer.data})
        else:
            return Response({"error": serializer.errors})
        
    def destroy(self,request,pk=None):
        id = int(pk)
        delete_event(id)
        return Response({'message': f"{id} : deleted"})
