from django.shortcuts import render
from django.http import HttpResponse
from .models import Create_new
import json

def landingPage(request):
	return render(request,'landingPage/index.html')


def createPost(request):
	# Below link make you understand how to access the passed data from ajax.
	# https://stackoverflow.com/questions/29780060/trying-to-parse-request-body-from-post-in-django#comment47695251_29781023

	if request.method == 'POST':
		body = json.loads(request.body)
		response = body['input_data']

		name = response['name'];
		email = response['email'];
		blog_title = response['title'];
		content = response['content'];

		# print(name);
		# print(email);
		# print(blog_title);
		# print(content);

		#Store in the database 
		response = Create_new(name = name, email=email, title = blog_title, content=content)
		response.save()

		return HttpResponse('success')

