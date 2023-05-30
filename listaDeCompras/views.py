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


@api_view(['POST'])
def create_item(request):
    print('dsauihodausnoimhdsuas')
    if request.method == 'POST':
        item_data = JSONParser().parse(request)
        item_serializer = ListaDeComprasSerializer(data=item_data)
        if item_serializer.is_valid():
            item_serializer.save()

    # if request.method == 'PUT':
    # if request.method == 'DELETE':
