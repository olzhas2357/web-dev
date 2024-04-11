from django.urls import path
from . import views

urlpatterns = [ 
    path('companies/',views.companies, name='companies'),   
    path('companies/<int:id>', views.company_detail, name='company'),
    path('companies/<int:id>/vacancies', views.company_vacancies, name='vacancy'),
    path('vacancies', views.vacancies, name='vacancies'),
    path('vacancies/<int:id>', views.vacancy_detail),
    path('vacancies/top_ten', views.top10_vacacies)
 ]