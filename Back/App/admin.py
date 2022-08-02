from django.contrib import admin
from .models import Countries, Airlines,Customers, Flights, Tickets
# Register your models here.
admin.site.register(Countries)
admin.site.register(Airlines)
admin.site.register(Customers)
admin.site.register(Flights)
admin.site.register(Tickets)
# admin.site.register(CustomerService)
