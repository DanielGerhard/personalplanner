# Generated by Django 4.2 on 2023-05-30 04:18

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('listaDeCompras', '0003_remove_listadecompras_valor_currency_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='listadecompras',
            name='criacao',
            field=models.DateTimeField(blank=True, default=django.utils.timezone.now, null=True, verbose_name='Data de Criação'),
        ),
        migrations.AlterField(
            model_name='listadecompras',
            name='descricao',
            field=models.CharField(blank=True, max_length=255, null=True, verbose_name='Descrição'),
        ),
        migrations.AlterField(
            model_name='listadecompras',
            name='valor',
            field=models.DecimalField(blank=True, decimal_places=2, max_digits=10, null=True),
        ),
    ]