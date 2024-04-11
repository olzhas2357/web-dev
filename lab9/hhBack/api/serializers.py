from rest_framework import serializers
from api.models import Company, Vacancy

class CompanySerializer(serializers.Serializer):
    class Meta:
        model = Company
        fields = '__all__'

    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField()
    description = serializers.CharField()
    city = serializers.CharField()
    address = serializers.CharField()
    
    def create(self, validated_data):
        instance = Company.objects.create(**validated_data)
        return instance
    
class VacancySerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField()
    description = serializers.CharField()
    salary = serializers.CharField()
    company_id = serializers.IntegerField()
    def create(self, validated_data):
        return Vacancy.objects.create(**validated_data)