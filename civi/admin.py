from django.contrib import admin
from .models import Contact

from .models import Skill, Project
admin.site.register(Project)  
@admin.register(Contact)
class ContactAdmin(admin.ModelAdmin):
    list_display = ("name", "email", "created_at")
    search_fields = ("name", "email")
    list_filter = ("created_at",)
    ordering = ("-created_at",)



  