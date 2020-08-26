import functools
import uuid
from flask import (
    Blueprint, flash, g, redirect, render_template, request, session, url_for, jsonify, make_response
)
from werkzeug.security import check_password_hash, generate_password_hash

bp = Blueprint('auth', __name__)