import os

def listFiles(path):
    for root, dirs, files in os.walk(path):
        for filename in files:
            print(filename)

def listPendingCertificates():
    listFiles("./certificates/pending")

def listIssuedCertificates():
    listFiles("./certificates/issued")

def listRevokedCertificates():
    listFiles("./certificates/revoked")

if __name__ == "__main__":
    listPendingCertificates()
    listIssuedCertificates()
    listRevokedCertificates()