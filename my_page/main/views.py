from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader

def get_main(request):
  template = loader.get_template('index.html')
  return HttpResponse(template.render())