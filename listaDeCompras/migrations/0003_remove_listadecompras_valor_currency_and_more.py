# Generated by Django 4.2 on 2023-05-30 02:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('listaDeCompras', '0002_rename_listasdecompras_listadecompras'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='listadecompras',
            name='valor_currency',
        ),
        migrations.AlterField(
            model_name='listadecompras',
            name='valor',
            field=models.DecimalField(decimal_places=2, max_digits=10, null=True),
        ),
    ]
