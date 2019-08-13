from django.db import models

# Create your models here.
class Meal(models.Model):
    title = models.CharField(max_length=40)
    meal_type = models.CharField(max_length=20)
    meal_date = models.DateField(null=False, blank=False)
    calories = models.CharField(max_length=6)
    protein = models.CharField(max_length=6)
    fat = models.CharField(max_length=6)
    carbs = models.CharField(max_length=6)

    def __str__(self):
        # String for representing the Model object
        return self.title
