import os
import uuid
import datetime

def listFiles(path):
    filesToReturn = []
    for root, dirs, files in os.walk(path):
        for filename in files:
            print(os.path.join(root, filename))
            filesToReturn.append(filename)
    return filesToReturn

def listPendingCertificates():
    return listFiles("./certificates/pending")

def listIssuedCertificates():
    return listFiles("./certificates/issued")

def listRevokedCertificates():
    return listFiles("./certificates/revoked")

def createCsr(username, content):
    script_dir = os.path.dirname(__file__)  # <-- absolute dir the script is in
    date = datetime.datetime.now().strftime("%Y-%m-%d_%H-%M-%S")
    rel_path = "certificates/pending/" + username+date+".csr"
    abs_file_path = os.path.join(script_dir, rel_path)

    f = open(abs_file_path, "w+")
    f.write(content)
    f.close()

if __name__ == "__main__":
    listPendingCertificates()

    #listIssuedCertificates()
    #listRevokedCertificates()