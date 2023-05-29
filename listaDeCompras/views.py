from rest_framework import viewsets
from .serializers import ListaDeComprasSerializer
from .models import ListaDeCompras


class ListaDeComprasViewSet(viewsets.ModelViewSet):
    queryset = ListaDeCompras.objects.all().order_by('criacao')
    serializer_class = ListaDeComprasSerializer