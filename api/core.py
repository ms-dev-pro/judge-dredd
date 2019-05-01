from flask import Flask, g, request, Response, redirect, session, url_for
from flask_simpleldap import LDAP

import uuid
import json

app = Flask(__name__)

app.debug = True
app.secret_key = "developmentsecretkey"
app.config['LDAP_HOST'] = 'controler.epsi.intra'
app.config['LDAP_BASE_DN'] = 'cn=Users,dc=epsi,dc=intra'
app.config['LDAP_USERNAME'] = 'cn=Administrator,cn=Users,dc=epsi,dc=intra'
app.config['LDAP_PASSWORD'] = 'P@ssw0rd'
app.config['LDAP_USER_OBJECT_FILTER'] = '(sAMAccountName=%s)'


ldap = LDAP(app)

@app.before_request
def before_request():
    g.user = None
    if 'user_id' in session:
        # This is where you'd query your database to get the user info.
        g.user = {}
        # Create a global with the LDAP groups the user is a member of.
        g.ldap_groups = ldap.get_user_groups(user=session['user_id'])


@app.route('/logged')
@ldap.login_required
def index():
    return 'Successfully logged in!'



@app.route('/')
def mainRoute():
    return handleResponse(200, 'text/plain', 'Welcome to Judge-Dredd API !')

@app.route('/login', methods=['GET', 'POST'])
def login():
    if g.user:
        return redirect(url_for('index'))
    if request.method == 'POST':
        user = request.form['user']
        passwd = request.form['passwd']
        test = ldap.bind_user(user, passwd)
        if test is None or passwd == '':
            return handleErrors(422, "invalid_credentials")
        else:
            session['user_id'] = user
            print(user)
            return handleResponse(200, 'text/plain', 'successful_login')
    return """<form action="" method="post">
                user: <input name="user"><br>
                password:<input type="password" name="passwd"><br>
                <input type="submit" value="Submit"></form>"""




def handleErrors(statuscode, errorCode):
    switcher = {
        "default_error": "Une erreur est survenue !",
        "invalid_credentials" : "Mauvaise combinaison login/password."
    }
    content = switcher.get(errorCode, "Wrong errorCode")
    return (handleResponse(statuscode, 'text/plain', content))


def handleResponse(statuscode, mimeType, content):
    return Response(content, status=statuscode, mimetype=mimeType)


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8080, debug=True)