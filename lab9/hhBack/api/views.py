from django.http.response import JsonResponse
from .models import Company, Vacancy
from api.serializers import CompanySerializer, VacancySerializer
from django.views.decorators.csrf import csrf_exempt
from rest_framework.response import Response
import json
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view

@csrf_exempt
@api_view(['GET','POST'])
def companies(request):
    if request.method == 'GET':
        companies = Company.objects.all()
        serializer = CompanySerializer(companies, many=True)
        return JsonResponse(serializer.data, safe=False)
    elif request.method == 'POST':
        json_data = json.loads(request.body)
        serializer = CompanySerializer(data=json_data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)

@csrf_exempt
@api_view(['GET', 'PUT', 'DELETE'])
def company_detail(request, id):
    try:
        company = Company.objects.get(pk=id)
    except Company.DoesNotExist as e:
        return JsonResponse({'error': str(e)}, status=404)    
    if request.method == 'GET':
        serializer = CompanySerializer(company)
        return JsonResponse(serializer.data)
    elif request.method == 'PUT':
        data = json.loads(request.body)
        company.name = data.get('name', company.name)
        company.description = data.get('description', company.description)
        company.city = data.get('city', company.city)
        company.address = data.get('address', company.address)
        company.save()
        return JsonResponse(company.to_json())
    elif request.method == "DELETE":
        company.delete()
        return JsonResponse({"deleted": True})

def company_vacancies(request, id):
    if request.method == 'GET':
        try:
            company = Company.objects.get(id=id)
            vacancies = Vacancy.objects.filter(company=company)
            serializer = VacancySerializer(vacancies, many=True)
            return JsonResponse(serializer.data, safe=False)
        except Company.DoesNotExist as e:
            return JsonResponse({'error': str(e)}, status=404)
@api_view(['GET', 'POST'])
def vacancies(request):
    if request.method == 'GET':
        try:
            vacancy = Vacancy.objects.all()
            serializer = VacancySerializer(vacancy, many=True)
            return JsonResponse(serializer.data, safe=False)
        except Company.DoesNotExist as e:
            return JsonResponse({'error': str(e)}, status=404)
    elif request.method == 'POST':
        data = json.loads(request.body)
        company_id = data.get('company_id')
        if company_id is None:
            return JsonResponse({'error': 'company_id is required'}, status=400)
        data['company_id'] = company_id

        serializer = VacancySerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors, status=400)
def vacancy_detail(request, id):
    if request.method == 'GET':
        try:
            vacancy = Vacancy.objects.get(id=id)
        except Vacancy.DoesNotExist as e:
            return JsonResponse({'error': str(e)}, status=404)
        return JsonResponse(vacancy.to_json(), safe=False)
    
def top10_vacacies(request):
    vacancy = Vacancy.objects.order_by('-salary')[:2]
    serializer = VacancySerializer(vacancy, many=True)
    return JsonResponse(serializer.data, safe=False)