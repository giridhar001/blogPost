from django.db import models

# Create your models here.

class Create_new(models.Model):
	name= models.CharField(max_length=50, default='')
	email= models.CharField(max_length=50, default='')
	title= models.CharField(max_length=50, default='')
	content= models.TextField(default='') 