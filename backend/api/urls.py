from django.urls import path, re_path,include
from .user_login import urls as user_urls
from .aircraft_operation import urls as operation_urls


urlpatterns=[
    re_path('auth/', include(user_urls)),
    re_path('aircrafts/',include(operation_urls)),


]