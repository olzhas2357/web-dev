from django.db import models

class Company(models.Model):
    name = models.CharField(max_length=15)
    description = models.TextField()
    city = models.CharField(max_length=150)
    address = models.TextField()
    def __str__(self):
        return f"name: {self.name}, description: {self.description}, city: {self.city}, address: {self.address}"
    
    def to_json(self):
        return {
            'name': self.name,
            'description': self.description,
            'city': self.city,
            'address': self.address
        } 
    class Meta:
        verbose_name = "Company"
        verbose_name_plural = "Companies"

class Vacancy(models.Model):
    name = models.CharField(max_length=15)
    description = models.TextField()
    salary = models.FloatField()
    company = models.ForeignKey(
        Company,
        on_delete=models.CASCADE,
        related_name='vacancies' 
    )
    class Meta:
        verbose_name = "Vacancy"
        verbose_name_plural = "Vacancies"

    def __str__(self):
        return f"name: {self.name}, description: {self.description}, salary: {self.salary}"

    def to_json(self):
        return {
            "id":self.id,
            "name": self.name,
            "description": self.description,
            "salary": self.salary 
        }