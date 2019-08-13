from django.contrib import admin
from .models import Meal

# Register your models here.
class MealAdmin(admin.ModelAdmin):
    list_display = ('title', 'meal_date', 'meal_type', 'calories', 'protein', 'fat', 'carbs')

admin.site.register(Meal, MealAdmin)