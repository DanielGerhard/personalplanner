from django.shortcuts import render, redirect
from django.urls import reverse
from .forms import *


def add_receita(request, template):
    addReceita = AddReceita(request.POST)

    if addReceita.is_valid():
        receita = addReceita.save(commit=False)
        receita.save()
        return redirect('/')
    else:
        addReceita = AddReceita(request.POST)
    context = {
        'addReceita': addReceita,
    }

    return render(request, template, context)

def remover_receita(request):
    id_receita = request.POST.get("id-receita")
    receita = Receita.objects.filter(id=id_receita).first()
    receita.delete()
