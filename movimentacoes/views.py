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
