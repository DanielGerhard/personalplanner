from django.db import models
from django.utils import timezone
from contatos.models import *
from djmoney.models.fields import MoneyField

class ListaDeCompras(models.Model):
    descricao = models.CharField(
        max_length=255,
        verbose_name='Descrição',
        null=True,
        blank=True,
    )

    comprado = models.BooleanField(default=False)
    
    # id_categoria = models.ForeignKey(
    #     CategoriaReceitas,
    #     on_delete=models.SET_NULL,
    #     blank=True,
    #     null=True,
    #     verbose_name='Categoria'
    # )

    valor = models.DecimalField(
        max_digits=10,
        decimal_places=2,
        null=True,
        blank=True,
    )

    criacao = models.DateTimeField(
        default=timezone.now,
        verbose_name='Data de Criação',
        null=True,
        blank=True,
    )