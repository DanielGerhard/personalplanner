# Generated by Django 4.2 on 2023-06-18 20:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('movimentacoes', '0004_alter_receita_valor_alter_receita_valor_currency'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='receita',
            name='valor_currency',
        ),
        migrations.AlterField(
            model_name='receita',
            name='valor',
            field=models.DecimalField(blank=True, decimal_places=2, max_digits=10, null=True),
        ),
    ]
