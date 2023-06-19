from rest_framework import serializers
from .models import Despesa, Receita

class DespesasSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Despesa
        fields = ('id', 'descricao')

class ReceitasSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Receita
        fields = ('id', 'descricao','valor', 'pagador', 'data')