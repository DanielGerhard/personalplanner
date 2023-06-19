from .serializers import DespesasSerializer, ReceitasSerializer
from .models import Despesa, Receita
from django.http.response import JsonResponse
from rest_framework import viewsets
from rest_framework.parsers import JSONParser
from rest_framework import status
from rest_framework.decorators import api_view


class DespesasViewSet(viewsets.ModelViewSet):
    queryset = Despesa.objects.all().order_by('criacao')
    serializer_class = DespesasSerializer

class ReceitasViewSet(viewsets.ModelViewSet):
    queryset = Receita.objects.all().order_by('criacao')
    serializer_class = ReceitasSerializer

# Regular ----

from django.shortcuts import render, redirect
from django.urls import reverse
from .forms import *


def add_receita(request):
    add_receita = AddReceita(request.POST)
    if add_receita.is_valid():
        receita = add_receita.save(commit=False)
        receita.save()

def add_despesa(request):
    addDespesa = AddDespesa(request.POST)
    if addDespesa.is_valid():
        receita = add_despesa.save(commit=False)
        receita.save()


def remover_receita(request):
    id_receita = request.POST.get("id-receita")
    receita = Receita.objects.filter(id=id_receita).first()
    receita.delete()
