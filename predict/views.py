import json
from django.http import JsonResponse
from predict.methods.encoding import encode_features
from predict.methods.prediction import predict


def is_poisonous(request):
    body_unicode = request.body.decode('utf-8')
    body = json.loads(body_unicode)

    params_array = [v for k, v in body.items()]

    X_encoded = encode_features(params_array)

    pred_res = predict(X_encoded)

    print(pred_res)

    return JsonResponse("request catched", safe=False)
