from flask import Flask, request, Response, redirect
from flask_simpleldap import LDAP

import uuid
import json

app = Flask(__name__)

app.config['LDAP_BASE_DN'] = 'OU=I4,dc=epsi,dc=intra'
app.config['LDAP_HOST'] = 'controler.epsi.intra'
app.config['LDAP_USERNAME'] = 'CN=Administrator,OU=Users,DC=epsi,DC=intra'
app.config['LDAP_PASSWORD'] = 'P@ssw0rd'
ldap = LDAP(app)

@app.route('/')
def mainRoute():
    return handleResponse(200, 'text/plain', 'Welcome to Judge-Dredd API !')

@app.route('/login', methods = ['POST'])
def loginRoute():
    if request.method == 'POST':
        user = request.get_json()
        print(user['username'])
        print(user['password'])
        test = ldap.bind_user(user['username'], user['password'])
        if test is None or user['password'] == '':
            return 'Invalid credentials heyheyhey'
        else:
            return redirect('/logged')

@app.route('/logged')
@ldap.login_required
def loggedRoute():
    return 'Successfully logged in!'

def handleErrors(statuscode, errorCode):
    switcher = {
        "defaultError": "Une erreur est survenue !",
    }
    content = switcher.get(errorCode, "Wrong errorCode")
    return (handleResponse(statuscode, 'text/plain', content))


def handleResponse(statuscode, mimeType, content):
    return Response(content, status=statuscode, mimetype=mimeType)


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8080, debug=True)