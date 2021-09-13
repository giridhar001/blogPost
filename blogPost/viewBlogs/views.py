from django.shortcuts import render
from landingPage.models import Create_new
# Create your views here.

def viewBlogs(request):
	blogs = Create_new.objects.all()
	# for blog in blogs:
	# 	author_name = blog.name
	# 	author_email = blog.email
	# 	blog_title = blog.title
	# 	blog_content = blog.content
	
	# context = {
	# 	aut
	# }
	return render(request,'viewBlogs/index.html',{'blogs':blogs})
