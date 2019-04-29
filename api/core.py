from flask import Flask, request, Response
import uuid
import json

app = Flask(__name__)


@app.route('/')
def mainRoute():
    return handleResponse(200, 'text/plain', 'Welcome to Judge-Dredd API !')


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