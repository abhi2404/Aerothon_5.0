from django.urls import path
from rest_framework_simplejwt.views import  TokenRefreshView
from .views import MyTokenObtainPairView,LogoutView , RegisterUser

urlpatterns = [
    path('login/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('logout/', LogoutView.as_view(), name='auth_logout'),
    path('register/',RegisterUser.as_view(), name='register_user'),

]
