from django.db import models

# Create your models here.
class Member(models.Model):
    user_name = models.CharField(max_length=10)
    password = models.CharField(max_length=10)
    name = models.TextField()
    email = models.EmailField()

    class Meta:
        managed = True
        db_table = 'members'


