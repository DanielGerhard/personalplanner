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


@api_view(['PUT'])
def update_item(request):
    if request.method == 'PUT':
        item_data = JSONParser().parse(request)
        item_id = item_data.get('id')  # ID do item a ser atualizado
        campo_item = item_data.get('campo')  # Campo a ser atualizado
        valor_item = item_data.get('valor')  # Valor a ser atribuído ao campo
        
        try:
            item_instance = Item.objects.get(pk=item_id)
        except Item.DoesNotExist:
            return Response({'error': 'Item não encontrado.'}, status=status.HTTP_404_NOT_FOUND)
            
        setattr(item_instance, campo_item, valor_item)
        
        item_serializer = ListaDeComprasSerializer(item_instance, data=item_data, partial=True)
        if item_serializer.is_valid():
            item_serializer.save()
            return Response(item_serializer.data)
        return Response(item_serializer.errors, status=status.HTTP_400_BAD_REQUEST)