from email.policy import default
from django.db import models
from user.models import  User
# Create your models here.

class Aircraft_Part(models.Model):
    name = models.CharField(max_length=255)
    material_composition = models.CharField(max_length=255)
    age = models.IntegerField()
    condition = models.CharField(max_length=255)
    location = models.CharField(max_length=255)
    manufacturer = models.CharField(max_length=255)
    aircraft_model = models.CharField(max_length=255)
    potential_use_cases = models.TextField()
    new_parts_carbon_footprint = models.FloatField(null=True, blank=True)
    recycled_parts_carbon_footprint = models.FloatField(null=True, blank=True)
    water_usage_new_parts = models.FloatField(null=True, blank=True)
    water_usage_recycled_parts = models.FloatField(null=True, blank=True)
    landfill_waste_new_parts = models.FloatField(null=True, blank=True)
    landfill_waste_recycled_parts = models.FloatField(null=True, blank=True)
    energy_consumption_new_parts = models.FloatField(null=True, blank=True)
    energy_consumption_recycled_parts = models.FloatField(null=True, blank=True)
    recycling_rate = models.FloatField(null=True, blank=True)
    toxicity_score_new_parts = models.FloatField(null=True, blank=True)
    toxicity_score_recycled_parts = models.FloatField(null=True, blank=True)
    remanufacturing_potential = models.CharField(max_length=255)
    life_cycle_assessment = models.CharField(max_length=255)
    renewable_material_content = models.FloatField(null=True, blank=True)
    carbon_footprint_saved = models.FloatField(null=True, blank=True)
    water_usage_saved = models.FloatField(null=True, blank=True)
    landfill_waste_saved = models.FloatField(null=True, blank=True)
    energy_consumption_saved = models.FloatField(null=True, blank=True)
    toxicity_score_difference = models.FloatField(null=True, blank=True)
    remanufacturing_potential_percent = models.FloatField(null=True, blank=True)
    life_cycle_assessment_score = models.FloatField(null=True, blank=True)
    status=models.BooleanField(default=1)
    added_by=models.ForeignKey(User, null=True, blank=True,default=1, on_delete=models.CASCADE)


class Transaction(models.Model):
    timestamp = models.DateTimeField(auto_now_add=True)
    aircraft_part = models.ForeignKey(Aircraft_Part, on_delete=models.CASCADE)
    buyer_id = models.ForeignKey(User, on_delete=models.CASCADE) # id of the buyer (manufacturer or recycling facility)

