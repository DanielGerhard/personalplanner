from django.shortcuts import render, redirect
from .forms import RegisterForm
from django.contrib.auth.decorators import login_required
from django.contrib.auth import login, logout, authenticate
from movimentacoes.views import *
from movimentacoes.models import *


@login_required(login_url="/login")
def dashboard(request):
    if request.method == 'POST':
        if 'add-receita' in request.POST:
            form = add_receita(request)
            return redirect('/dashboard')
        if 'deletar-receita' in request.POST:
            form = remover_receita(request)
            return redirect('/dashboard')
    else:
        form = AddReceita()
        # campos = []
        # cria uma lista com os nomes verboses dos campos
        # campos = [Receita._meta.get_field(field).verbose_name for field in Receita._meta.fields]
    receitas = Receita.objects.all()
    requesto = request
    campos_receita = ['id', 'descricao', 'valor', 'pagador', 'data']
    form = AddReceita()
    receitas_labels = Receita.objects.first().get_verbose_names

    return render(request, 'main/dashboard.html', {'form': form,
                                                   'receitas': receitas,
                                                   'requesto': requesto,
                                                   'receitas_labels': receitas_labels,
                                                   'campos_receita': campos_receita})


def sign_up(request):
    if request.method == 'POST':
        form = RegisterForm(request.POST)
        if form.is_valid():
            user = form.save()
            login(request, user)
            return redirect('/dashboard')
    else:
        form = RegisterForm()
    return render(request, 'registration/sign-up.html', {"form": form})
