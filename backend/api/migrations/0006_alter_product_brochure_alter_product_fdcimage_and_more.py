# Generated by Django 5.1.1 on 2024-10-09 11:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0005_remove_product_created_at'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='brochure',
            field=models.URLField(blank=True, max_length=400, null=True),
        ),
        migrations.AlterField(
            model_name='product',
            name='fdcImage',
            field=models.URLField(blank=True, max_length=400, null=True),
        ),
        migrations.AlterField(
            model_name='product',
            name='name',
            field=models.CharField(max_length=400),
        ),
        migrations.AlterField(
            model_name='product',
            name='printer',
            field=models.CharField(blank=True, max_length=400),
        ),
        migrations.AlterField(
            model_name='product',
            name='stampImage',
            field=models.URLField(blank=True, max_length=400, null=True),
        ),
    ]