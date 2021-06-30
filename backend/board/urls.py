from django.conf.urls import url
from .views import Posts as post

urlpatterns = [
    url('/submit', post.as_view())
]