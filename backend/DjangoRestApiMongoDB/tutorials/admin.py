from django.contrib import admin
from tutorials.models import Tutorial

# Register your models here.

@admin.register(Tutorial)
class TutorialAdmin(admin.ModelAdmin):
    list_display = ['id','title']