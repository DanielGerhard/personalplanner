from django.urls import path
from . import views


urlpatterns = [
    path('', views.dashboard, name='dashboard'),
    path('dashboard', views.dashboard, name='dashboard'),
    path('lista-de-compras', views.lista_de_compras, name='lista-de-compras'),
    path('sign-up', views.sign_up, name='sign-up'),
]