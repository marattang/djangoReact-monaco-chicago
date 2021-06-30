from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from board.models import PostVO as Post
from board.serializers import PostSerializers
from rest_framework.views import APIView
from rest_framework.response import Response
from icecream import ic
from .serializers import PostSerializers

class Posts(APIView):
    def post(self, request):
        data = request.data['body']
        ic(data)
        serializer = PostSerializers(data = data)
        if serializer.is_valid():
            serializer.save()
            return Response({'result':f'Welcome, {serializer.data.get("name")}'}, status=201)
        ic(serializer.errors)
        return Response(serializer.errors, status=400)

class Post(APIView):
    def get(self, request):
        pass

@csrf_exempt
def snippet_list(request):
    """
    List all code snippets, or create a new snippet.
    """
    if request.method == 'GET':
        snippets = Post.objects.all()
        serializer = PostSerializers(snippets, many=True)
        return JsonResponse(serializer.data, safe=False)

    elif request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = PostSerializers(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        print(serializer.errors)
        return JsonResponse(serializer.errors, status=400)