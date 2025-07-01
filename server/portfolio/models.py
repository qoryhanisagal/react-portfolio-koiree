from django.db import models

class Skill(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name

class Project(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    tech_stack = models.ManyToManyField(Skill)
    image = models.ImageField(upload_to='projects/')
    preview_link = models.URLField(blank=True, null=True)
    code_link = models.URLField(blank=True, null=True)

    def __str__(self):
        return self.title