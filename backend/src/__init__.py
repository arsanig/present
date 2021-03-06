import os
from flask import Flask
from .data.db import db_session

def create_app(test_config=None):
    # create and configure the app
    app = Flask(__name__, instance_relative_config=True)
    app.config.from_mapping(
        SECRET_KEY='dev',
    )

    # a simple page that says hello
    @app.route('/')
    def index():
        return 'Landing screen with a call to action...'

    from .data import db
    db.init_db(app)
    
    from . import auth
    app.register_blueprint(auth.bp)

    @app.teardown_appcontext
    def shutdown_session(exception=None):
        db_session.remove()

    return app