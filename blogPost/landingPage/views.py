from django.shortcuts import render
from django.http import JsonResponse
import json

def landingPage(request):
	return render(request,'landingPage/index.html')

