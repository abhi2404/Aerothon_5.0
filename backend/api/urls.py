from django.urls import path, re_path,include
from .user_login import urls as user_urls


urlpatterns=[
    re_path('auth/', include(user_urls)),

]