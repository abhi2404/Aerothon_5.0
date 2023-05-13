from django.urls import path
from .views import Aircraft_type_data , BuyParts , getOrder


urlpatterns = [
    
    path('get_data/',Aircraft_type_data.as_view(), name='Aircraft_type_data'),
    path('buy_parts/',BuyParts.as_view(), name='BuyAircraft'),
    path('Orders/',getOrder.as_view(), name='Orders')

]
