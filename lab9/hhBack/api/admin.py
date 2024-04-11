from django.contrib import admin
from api.models import Company, Vacancy

@admin.register(Company)
class CompanyAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'description', 'city', 'address')
    search_fields = ['name', 'description', 'city'] 

@admin.register(Vacancy)
class CompanyAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'description', 'salary', )
    search_fields = ['name', 'description', 'salary'] 