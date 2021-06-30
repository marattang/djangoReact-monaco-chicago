from rest_framework import serializers
from .models import PostVO as post

class PostSerializers(serializers.Serializer):
    title = serializers.CharField()
    content = serializers.CharField()
    id = serializers.IntegerField(read_only=True)
    create_at = serializers.CharField(read_only=True)
    update_at = serializers.CharField(read_only=True)
    class Meta:
        model = post
        fields = ['title', 'content']

    def create(self, validate_data):
        return post.objects.create(**validate_data)

    def update(self, instance, validated_data):
        instance.title = validated_data.get('title', instance.title)
        instance.content = validated_data.get('content', instance.content)
        return instance