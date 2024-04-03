from django.urls import path
from . import views

urlpatterns = [
    path('products/', views.products),
    path('products/<int:id>', views.product_detail, name='product_detail'),
    path('categories/', views.categories, name='categories'),
    path('categories/<int:id>/', views.category_detail),
    path('categories/<int:id>/products/', views.category_products, name='category_products'),
]