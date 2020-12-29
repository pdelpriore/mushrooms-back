import pandas as pd
from .decoding import decode_result
import os


def predict(X):
    model = pd.read_pickle(os.path.join(os.path.dirname(os.path.dirname(__file__)), 'ml/mushrooms_ml_model.pickle'))

    res = model.predict(X)

    return decode_result(res[0])
