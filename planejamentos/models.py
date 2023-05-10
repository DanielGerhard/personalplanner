from django.db import models
from django.utils import timezone
from movimentacoes.models import *
from contatos.models import *


# region Receitas
class PlanejamentoCategoriaReceitas(models.Model):
    descricao = models.CharField(max_length=255)


class PlanejamentoSubcategoriaReceitas(models.Model):
    descricao = models.CharField(max_length=255)


class PlanejamentoReceita(models.Model):
    descricao = models.CharField(max_length=255)
    categoria = models.ForeignKey(CategoriaReceitas, on_delete=models.SET_NULL, null=True)
    valor = models.FloatField(max_length=255)
    data = models.DateTimeField()
    pagador = models.ForeignKey(Contato, on_delete=models.DO_NOTHING)
    criacao = models.DateTimeField(default=timezone.now)


class PlanejamentoRelacaoReceitaSubcategoria(models.Model):
    descricao = models.CharField(max_length=255)
    id_receita = models.ForeignKey(Receita, on_delete=models.CASCADE)
    id_subcategoria = models.ForeignKey(SubcategoriaReceitas, on_delete=models.CASCADE)
# endregion


# region Despesas
class PlanejamentoCategoriaDespesas(models.Model):
    descricao = models.CharField(max_length=255)


class PlanejamentoSubcategoriaDespesas(models.Model):
    descricao = models.CharField(max_length=255)


class PlanejamentoDespesa(models.Model):
    descricao = models.CharField(max_length=255)
    id_despesa = models.ForeignKey(SubcategoriaDespesas, on_delete=models.DO_NOTHING)
    criacao = models.DateTimeField(default=timezone.now)
    data = models.DateTimeField()
    pagador = models.ForeignKey(Contato, on_delete=models.DO_NOTHING)
    criacao = models.DateTimeField(default=timezone.now)


class PlanejamentoRelacaoDespesaSubcategoria(models.Model):
    descricao = models.CharField(max_length=255)
    id_despesa = models.ForeignKey(Despesa, on_delete=models.CASCADE)
    id_subcategoria = models.ForeignKey(
        SubcategoriaDespesas, on_delete=models.CASCADE)
# endregion
