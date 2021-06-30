from django.db import models

# Create your models here.
class PostVO(models.Model):
    id = models.AutoField(primary_key=True)  # or False
    title = models.CharField(max_length=30)
    content = models.TextField()
    create_at = models.DateTimeField(auto_now=True)
    update_at = models.DateTimeField(auto_now=True)

    class Meta:
        managed = True
        db_table = 'posts'

    def __str__(self):
        return f'[{self.pk}] {self.id}' \
               f'title = {self.title}' \
               f'content = {self.content}' \
               f'create_at = {self.create_at}' \
               f'update_at = {self.update_at}'
