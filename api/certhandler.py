from filehandler import *
import OpenSSL.crypto
from OpenSSL.crypto import load_certificate_request, FILETYPE_PEM

from utils import *

def parseCert(state, id):
    csrContent = readCert(state, id)
    req = load_certificate_request(FILETYPE_PEM, csrContent)
    key = req.get_pubkey()
    key_type = 'RSA' if key.type() == OpenSSL.crypto.TYPE_RSA else 'DSA'
    subject = req.get_subject()
    components = dict_bytes_to_str(dict(subject.get_components()))
    certToReturn = {
        "CN": components["CN"] if 'CN' in components.keys() else "none",
        "O": components["O"] if 'O' in components.keys() else "none",
        "OU": components["OU"] if 'OU' in components.keys() else "none",
        "L": components["L"] if 'L' in components.keys() else "none",
        "C": components["C"] if 'C' in components.keys() else "none",
        "ST": components["ST"] if 'ST' in components.keys() else "none",
        "key_algo": key_type,
        "key_size": key.bits()
    }
    return certToReturn


if __name__ == "__main__":
    parseCert("rezez")
