from django.conf.urls import url
from .views import Posts as post

urlpatterns = [
    url('/register', post.as_view())
]