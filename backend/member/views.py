from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from rest_framework import status
from member.models import MemberVO
from member.serializers import MemberSerializer
from rest_framework.decorators import api_view, parser_classes
from icecream import ic

from member.models import MemberVO
from member.serializers import MemberSerializer
from rest_framework.decorators import api_view
from icecream import ic


@api_view(['GET', 'POST', 'DELETE'])
def members(request):
    if request.method == 'GET':
        all_members = MemberVO.objects.all()
        serializer = MemberSerializer(all_members, many=True)
        return JsonResponse(serializer.data, safe=False)
    elif request.method == 'POST':
        data = request.data['body']
        ic(data)
        serializer = MemberSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=status.HTTP_201_CREATED)
        return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        serializer = MemberSerializer()
        return JsonResponse(serializer.data, safe=False)

def get_queryset(self): #this method is called inside of get
    queryset = self.queryset.filter(doyourfiltering=True)
    return queryset


@api_view(['GET', 'PUT', 'DELETE'])
def member(request, pk):
    if request.method == 'GET':
        serializer = MemberSerializer()
        return JsonResponse(serializer.data, safe=False)
    elif request.method == 'PUT':
        serializer = MemberSerializer()
        return JsonResponse(serializer.data, safe=False)
    elif request.method == 'DELETE':
        serializer = MemberSerializer()
        return JsonResponse(serializer.data, safe=False)
