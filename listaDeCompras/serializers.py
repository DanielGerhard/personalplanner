from rest_framework import serializers
from .models import ListaDeCompras

class ListaDeComprasSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = ListaDeCompras
        fields = ('id', 'descricao', 'valor')