from django.urls import path
from . import views


urlpatterns = [
    path('', views.lista_de_compras, name='lista-de-compras'),
    path('dashboard', views.dashboard, name='dashboard'),
    path('lista-de-compras', views.lista_de_compras, name='lista-de-compras'),
    path('tabela-teste', views.tabela_teste, name='tabela-teste'),
    path('sign-up', views.sign_up, name='sign-up'),
]