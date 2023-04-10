from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone
from django.core.exceptions import ValidationError

# Create your models here.


class Product(models.Model):
    name = models.CharField(max_length=200, null=True, blank=True)
    desc = models.TextField(null=True, blank=True)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    deadline = models.DateTimeField()
    closed = models.BooleanField(default=False)

    def __str__(self):
        return self.name

    def is_closed(self):
        return timezone.now() >= self.deadline

    def current_highest_bid(self):
        return self.bid_set.order_by('-amount').first()


class Bid(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    bidder = models.ForeignKey(User, on_delete=models.CASCADE)
    amount = models.DecimalField(
        max_digits=10, decimal_places=2, null=True, blank=True)

    def __str__(self):
        return f"{self.bidder} <==> {self.product}"

    class Meta:
        # set a unique constraint on the combination of user and product
        unique_together = ('product', 'bidder')

    def clean(self):
        if self.product.is_closed():
            raise ValidationError("Bidding for this product has closed.")
        highest_bid = self.product.current_highest_bid()
        if highest_bid and self.amount <= highest_bid.amount:
            raise ValidationError(
                "Your bid must be higher than the current highest bid.")
        
    def save(self, *args, **kwargs):
        if self.amount > self.product.price:
            self.product.price = self.amount
            self.product.save(update_fields=['price'])
        super(Bid, self).save(*args, **kwargs)

    # def save(self, *args, **kwargs):
    #     self.full_clean()
    #     super().save(*args, **kwargs)
