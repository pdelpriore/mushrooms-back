def decode_result(res):
    target = {
        0: "edible",
        1: "poisonous"
    }
    return target[res]
