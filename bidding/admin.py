from django.contrib import admin
from .models import Product, Bid
# Register your models here.
lst = [Product, Bid]
admin.site.register(lst)
