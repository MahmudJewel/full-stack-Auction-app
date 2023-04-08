from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Product, Bid

class BiddingSerializers(serializers.ModelSerializer):
    class Meta:
        model = Bid
        fields = ('product', 'bidder', 'amount')