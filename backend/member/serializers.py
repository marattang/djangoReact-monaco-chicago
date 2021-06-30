from rest_framework import serializers
from . models import MemberVO as member
from icecream import ic

class MemberSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()
    name = serializers.CharField()
    email = serializers.CharField()
    class Meta:
        model = member
        fields = '__all'

    def create(self, validate_data):
        return member.objects.create(**validate_data)

    def update(self, instance, validated_data):
        #id, created_at, updated_at은 read only 필드이므로 update method에서는 제외
        # 'author'에 새로 들어오는 데이터가 없으면 이미 가지고 있는 instance.author를 사용한다.
        instance.username = validated_data.get('username', instance.username)
        instance.password = validated_data.get('password', instance.password)
        instance.name = validated_data.get('name', instance.name)
        instance.email = validated_data.get('email', instance.email)
        return instance