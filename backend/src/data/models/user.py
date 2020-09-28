import datetime
from ..db import Base
from sqlalchemy import Column, Integer, String

class User(Base):
    __tablename__ = 'users'
    id = Column(Integer, primary_key=True)
    public_id = Column(String(50), unique=True)
    # created_on = Column(DateTime(timezone=True), nullable=False)
    email = Column(String(120), unique=True, nullable=False)
    password = Column(String(300), nullable=False)
    role = Column(String(128), nullable=False, default='student')

    def __init__(self, public_id=None, email=None, password=None, role='student'):
        #self.created_on = created_on
        self.public_id = public_id
        self.email = email
        self.password = password
        self.role = role

    def __repr__(self):
        return '<User %r>' % (self.name)