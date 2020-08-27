import datetime

from sqlalchemy import Column, Integer, String
from . import db

class User(db.Base):
    __tablename__ = 'users'
    id = Column(Integer, primary_key=True)
    created_on = Column(DateTime(timezone=True), nullable=False)
    email = Column(String(120), unique=True, nullable=False)
    password = Column(String(300), nullable=False)
    role = Column(String(128), nullable=False, default='student')

    def __init__(self, created_on=None, email=None, password=None, role='student'):
        self.created_on = created_on
        self.email = email
        self.password = password
        self.role = role