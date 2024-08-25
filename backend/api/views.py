from django.shortcuts import render
import requests
from django.http import JsonResponse

def index(request):
    return render(request, 'index.html')


def get_weather(request):
    lat = request.GET.get('lat')
    lon = request.GET.get('lon')
    api_key = 'b94d47c71b72b7c1016f255ce45efc1b'
    url = f'http://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={api_key}&units=metric'

    response = requests.get(url)
    weather_data = response.json()

    return JsonResponse(weather_data)
