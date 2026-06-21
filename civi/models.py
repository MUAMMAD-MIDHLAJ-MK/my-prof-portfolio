from django.db import models

# Create your models here.
from django.db import models

class Skill(models.Model):
    name = models.CharField(max_length=100)
    image = models.ImageField(upload_to='skills/')

    def __str__(self):
        return self.name



class Project(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    image = models.ImageField(upload_to='projects/')
    github_link = models.URLField(blank=True, null=True)
    live_link = models.URLField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title




class Contact(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    subject = models.CharField(
    max_length=200,
    blank=True,
    null=True
)
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name