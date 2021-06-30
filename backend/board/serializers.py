from rest_framework import serializers

class PostSerializers(serializers.Serializer):
    id = serializers.IntegerField()
    title = serializers.CharField()
    content = serializers.CharField()
    create_at = serializers.DateTimeField()
    update_at = serializers.DateTimeField()


