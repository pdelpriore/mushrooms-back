import json
from django.http import JsonResponse


def is_poisonous(request):
    body_unicode = request.body.decode('utf-8')
    body = json.loads(body_unicode)

    params_array = [v for k, v in body.items()]

    print(params_array)

    return JsonResponse("request catched", safe=False)
