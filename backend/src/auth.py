import uuid
from flask import (
    Blueprint, flash, g, redirect, render_template, request, session, url_for, jsonify, make_response
)
from werkzeug.security import check_password_hash, generate_password_hash

from .data.db import db_session
from .data.models.user import User


bp = Blueprint('auth', __name__)

@bp.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    
    hashedPass = generate_password_hash(data['password'], method='sha256')
    new_user = User(public_id=str(uuid.uuid4()), email=data['email'], password=hashedPass)
    db_session.add(new_user)
    db_session.commit()
    return ''