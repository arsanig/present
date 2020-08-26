from sqlalchemy import Column, Integer, String
from db import Base

class User(Base):
    __tablename__ = 'users'
    id = Column(Integer, primary_key=True)
    created_on = Column()
    email = Column(String(120), unique=True, nullable=False)
    password = Column(String(300), nullable=False)
    role = Column(String(128), nullable=False, default='student')

    def __init__(self, name=None, email=None):
        self.name = name
        self.email = email

    def __repr__(self):
        return '<User %r>' % (self.name)