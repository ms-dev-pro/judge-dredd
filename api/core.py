from flask import Flask, request, Response, redirect
from flask_simpleldap import LDAP

import uuid
import json

app = Flask(__name__)

app.debug = True

app.config['LDAP_HOST'] = 'controler.epsi.intra'
app.config['LDAP_BASE_DN'] = 'cn=Users,dc=epsi,dc=intra'
app.config['LDAP_USERNAME'] = 'cn=Administrator,cn=Users,dc=epsi,dc=intra'
app.config['LDAP_PASSWORD'] = 'P@ssw0rd'


ldap = LDAP(app)

@app.route('/')
def mainRoute():
    return handleResponse(200, 'text/plain', 'Welcome to Judge-Dredd API !')

@app.route('/login', methods = ['GET'])
@ldap.basic_auth_required
def loginRoute():
    return 'Welcome, {0}!'.format(g.ldap_username)

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