from django.conf.urls import url
from django.urls import path
from .views import Members as members
from .views import Member as member

urlpatterns = [
    url('/signup', members.as_view()),
    path('/login/<str:pk>/', member.as_view())
]