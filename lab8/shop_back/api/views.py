from django.shortcuts import render
from django.http.response import JsonResponse, HttpResponse
from .models import Product, Category

def products(request):
    products = Product.objects.all()
    product_json = [p.to_json() for p in products]
    return JsonResponse(product_json, safe=False)

def product_detail(request, id):
    product = Product.objects.filter(pk=id).values()
    if not product:
        return JsonResponse({'error': 'Продукт не найден'}, status=404)
    
    return JsonResponse({'product': list(product)})

def categories(request):
    categories = Category.objects.all()
    category_json = [c.to_json() for c in categories]
    return JsonResponse(category_json, safe=False)

def category_detail(request, id):
    category = Category.objects.filter(pk=id).values()
    if not category:
        return JsonResponse({'error': 'Продукт не найден'}, status=404)
    return JsonResponse({'category': list(category )})

def category_products(request, id):
    try:
        category = Category.objects.get(pk=id)
    except Category.DoesNotExist:
        return JsonResponse({'error': 'Категория не найдена'}, status=404)

    products = Product.objects.filter(category=category)
    products_data = [{'id': product.id, 'name': product.name, 'price': product.price} for product in products]

    return JsonResponse({'category': category.name, 'products': products_data})