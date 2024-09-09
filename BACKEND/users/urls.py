from django.urls import path
from django import urls
from .views import UserDetail, UserList, helloworld

urlpatterns = [
    path('users/', UserList.as_view(), name='Users'),
    path('user/<int:pk>', UserDetail.as_view(), name='User'),
    path('hello/', helloworld, name='hello')
]