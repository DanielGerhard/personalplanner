from .serializers import ListaDeComprasSerializer
from .models import ListaDeCompras
from django.http.response import JsonResponse
from rest_framework import viewsets
from rest_framework.parsers import JSONParser
from rest_framework import status
from rest_framework.decorators import api_view


class ListaDeComprasViewSet(viewsets.ModelViewSet):
    queryset = ListaDeCompras.objects.all().order_by('criacao')
    serializer_class = ListaDeComprasSerializer