import pandas as pd
import numpy as np
import os


def encode_features(X):
    encoder = pd.read_pickle(os.path.join(os.path.dirname(os.path.dirname(__file__)), 'ml/mushrooms_feature_encoder.pickle'))

    X_np_array = np.array(X).reshape(1, 12)

    X_encoded = encoder.transform(X_np_array)

    return X_encoded
