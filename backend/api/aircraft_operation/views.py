from email.errors import BoundaryError
from math import perm
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from Aircrafts.models import *
from .serializer import Aircraft_data_serializer , TransactionSerializer
from rest_framework import generics
from rest_framework.pagination import PageNumberPagination
from django.shortcuts import get_object_or_404
import jwt
from backend import settings

#Custom Pagination Class
class CustomPagination(PageNumberPagination):
    page_size = 12
    page_size_query_param = 'page_size'
    max_page_size = 500
    page_query_param = 'page'


#get request for Aircraft parts data
class Aircraft_type_data(generics.ListAPIView):

    permission_classes = (IsAuthenticated,)

    serializer_class = Aircraft_data_serializer
    pagination_class=CustomPagination

    def get_queryset(self):
        return Aircraft_Part.objects.filter(name=self.request.query_params['name'],status=1).all()

#post request to place and order
class BuyParts(APIView):

    permission_classes = (IsAuthenticated,)


    def post(self, request):
        pk = jwt.decode(request.query_params['access'],settings.SECRET_KEY,algorithms=['HS256'])['email']
        print(request.data)

        buyer_id= get_object_or_404(User, username=pk)
        air_id= get_object_or_404(Aircraft_Part , id=request.data['id'])

        buy_srlz=TransactionSerializer(data=request.data)

        if buy_srlz.is_valid():
            buy_srlz.save(buyer_id=buyer_id,aircraft_part=air_id)
            Aircraft_Part.objects.filter(id=air_id).update(status=0)
            return Response({'msg':'Order created successfully'}, status=status.HTTP_200_OK)
        else:
            return Response({'error': buy_srlz.errors}, status=status.HTTP_400_BAD_REQUEST)

#getOrder details for a user
class getOrder(APIView):

    permission_classes = (IsAuthenticated,)

    def get(self,request):
        pk=jwt.decode(request.query_params['access'],settings.SECRET_KEY,algorithms=['HS256'])['email']
        buyer_id=get_object_or_404(User,username=pk)

        queryset=Transaction.objects.filter(buyer_id=buyer_id).values("timestamp","aircraft_part__name","aircraft_part__material_composition","aircraft_part__age","aircraft_part__condition","aircraft_part__location","aircraft_part__manufacturer","aircraft_part__aircraft_model","aircraft_part__toxicity_score_difference")
        return Response({'data':queryset}, status=status.HTTP_200_OK)





