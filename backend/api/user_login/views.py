from .serializers import *
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.response import Response
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializerCustom
    

class LogoutView(generics.GenericAPIView):
    permission_classes = (IsAuthenticated,)
    
    def post(self, request,*args, **kwargs):
        refresh_token = request.data["refresh_token"]
        token = RefreshToken(refresh_token)
        token.blacklist()
        return Response(status=status.HTTP_205_RESET_CONTENT)


class RegisterUser(APIView):


    #add user
    def post(self, request):
        # customize prim data
        user = {}
        user["password"] = request.data["password"]
        user["username"] = request.data['email']
        user["first_name"] = request.data['name']
        user["last_name"] = ""
        user["email"] = request.data['email']
        user["user_type"]=request.data['user_type']


        user_srlz = UserSerializer(data=user)
        if user_srlz.is_valid():
            user_srlz.save()
            return Response({'msg': 'User successfully created'}, status=status.HTTP_200_OK)

        else:
            return Response({'error': user_srlz.errors}, status=status.HTTP_400_BAD_REQUEST)

