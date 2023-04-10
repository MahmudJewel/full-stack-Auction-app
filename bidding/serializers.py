from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Product, Bid

class BiddingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bid
        fields = ('id','product', 'bidder', 'amount')
        # depth=1

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ('id','name', 'desc', 'price', 'deadline')
