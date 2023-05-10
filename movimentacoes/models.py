from django.db import models
from django.utils import timezone
from contatos.models import *


# region Receitas
class CategoriaReceitas(models.Model):
    descricao = models.CharField(max_length=255)


class SubcategoriaReceitas(models.Model):
    descricao = models.CharField(max_length=255)


class Receita(models.Model):
    descricao = models.CharField(max_length=255, verbose_name='Descrição')
    id_categoria = models.ForeignKey(CategoriaReceitas, on_delete=models.SET_NULL, blank=True, null=True, verbose_name='Categoria')
    valor = models.FloatField(max_length=255, verbose_name='Valor')
    data = models.DateTimeField(verbose_name='Data')
    pagador = models.ForeignKey(Contato, on_delete=models.SET_NULL, blank=True, null=True, verbose_name='Pagador')
    criacao = models.DateTimeField(default=timezone.now, verbose_name='Data de Criação')


class RelacaoReceitasubcategoria(models.Model):
    descricao = models.CharField(max_length=255)
    id_receita = models.ForeignKey(Receita, on_delete=models.CASCADE)
    id_subcategoria = models.ForeignKey(SubcategoriaReceitas, on_delete=models.CASCADE)
# endregion


# region Despesas
class CategoriaDespesas(models.Model):
    descricao = models.CharField(max_length=255)


class SubcategoriaDespesas(models.Model):
    descricao = models.CharField(max_length=255)


class Despesa(models.Model):
    descricao = models.CharField(max_length=255)
    id_categoria = models.ForeignKey(CategoriaDespesas, on_delete=models.SET_NULL, blank=True, null=True)
    criacao = models.DateTimeField(auto_now_add=True)
    data = models.DateTimeField(blank=True, null=True)
    pagador = models.ForeignKey(Contato, on_delete=models.SET_NULL, blank=True, null=True)
    criacao = models.DateTimeField(default=timezone.now)


class RelacaoDespesaSubcategoria(models.Model):
    descricao = models.CharField(max_length=255)
    id_despesa = models.ForeignKey(Despesa, on_delete=models.CASCADE)
    id_subcategoria = models.ForeignKey(SubcategoriaDespesas, on_delete=models.CASCADE)
# endregion
