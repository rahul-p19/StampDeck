from django.db import models

class Product(models.Model):
    name = models.CharField(max_length=400)
    releaseDate = models.DateField(blank=True, null=True)
    denomination = models.IntegerField(blank=True, null=True)
    quantity = models.IntegerField(blank=True, null=True)
    printer = models.CharField(max_length=400, blank=True)
    stampImage = models.URLField(max_length=400, blank=True, null=True)
    fdcImage = models.URLField(max_length=400, blank=True, null=True)
    brochure = models.URLField(max_length=400, blank=True, null=True)


class Customer(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    phone = models.CharField(max_length=20, blank=True)
    address = models.CharField(max_length=200, blank=True)
    pda_no = models.IntegerField(blank=True, null=True)


class Order(models.Model):
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    total_amount = models.DecimalField(max_digits=10, decimal_places=2)


class OrderItem(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField()
    price = models.DecimalField(max_digits=10, decimal_places=2)

