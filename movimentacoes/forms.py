from django import forms
from .models import *


class AddReceita(forms.ModelForm):
    data = forms.DateField(widget=forms.DateInput(attrs={'type': 'date'}))
    valor = forms.DecimalField(decimal_places=2)

    class Meta:
        model = Receita
        fields = ['descricao', 'id_categoria', 'valor', 'data', 'pagador']
        labels = {
            'descricao': 'Descrição',
            'id_categoria': 'Categoria',
            'valor': 'Valor',
            'data': 'Data',
            'pagador': 'Pagador'
        }

class AddDespesa(forms.ModelForm):
    data = forms.DateField(widget=forms.DateInput(attrs={'type': 'date'}))
    valor = forms.DecimalField(decimal_places=2)

    class Meta:
        model = Despesa
        fields = ['descricao', 'id_categoria', 'valor', 'data', 'beneficiario']
        labels = {
            'descricao': 'Descrição',
            'id_categoria': 'Categoria',
            'valor': 'Valor',
            'data': 'Data',
            'beneficiario': 'Beneficiario'
        }


class AddRelacaoReceitasubcategoria(forms.ModelForm):
    class Meta:
        model = RelacaoReceitasubcategoria
        fields = ['descricao', 'id_subcategoria']
        labels = {
            'descricao': 'Descrição',
            'id_subcategoria': 'Subcategoria'
        }


# class AddSubcategoriaReceita(forms.ModelForm):
#     class Meta:
#         model = SubcategoriaReceitas
#         fields = ['descricao']
#         labels = {'descricao': 'Descrição'}