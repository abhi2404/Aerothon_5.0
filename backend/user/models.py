from django.db import models
from django.contrib.auth.models import AbstractUser as user
from datetime import datetime


# Create your models here.
class User(user):
    is_superuser = models.IntegerField(default=0)
    is_active = models.IntegerField(default=1)
    date_joined = models.DateTimeField(default=datetime.now())
    user_type = models.CharField(max_length=10)
    profile_img = models.CharField(null=True, default=None,max_length=25)
    

    def __int__(self):
        return self.id