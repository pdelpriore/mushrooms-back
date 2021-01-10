import json
from django.http import JsonResponse
from predict.methods.encoding import encode_features
from predict.methods.prediction import predict


def is_poisonous(request):
    body_unicode = request.body.decode('utf-8')

    if len(body_unicode) > 0:
        body = json.loads(body_unicode)

        if len(body.keys()) < 12:
            return JsonResponse({"error": "bad request"})
        else:
            params_array = [v for k, v in body.items()]

            X_encoded = encode_features(params_array)

            pred_res = predict(X_encoded)

            return JsonResponse({"data": pred_res})
    else:
        return JsonResponse({"error": "bad request"})
