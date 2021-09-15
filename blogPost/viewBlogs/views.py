from django.shortcuts import render
from landingPage.models import Create_new
# Create your views here.

def viewBlogs(request):
	blogs = Create_new.objects.all()
	return render(request,'viewBlogs/index.html',{'blogs':blogs})
