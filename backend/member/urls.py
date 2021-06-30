from django.urls import path
from . import views

urlpattern = [
    path('member/signup', views.member_list)
]