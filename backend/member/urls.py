from django.conf.urls import url
from member import views
urlpatterns = [
    url(r'^register', views.members),
    url(r'^list', views.members),
]

'''
CBV (Class Based View)
from djago.confurls imort url
from .views import Member as members
from .views import Member as member
from django.urls import path, include
urlpatterns = [
    # path('/login/<str:pk>/', member.as_view()),
    # path('/modify/<str:pk>/', member.as_view()),
    # path('/delete/<str:pk>/', member.as_view()),
]
'''