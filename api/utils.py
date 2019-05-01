def dict_bytes_to_str(dict):
    return {key.decode(): val.decode() for key, val in dict.items()}