from fastapi import Header, HTTPException

from sqlalchemy.orm import declarative_base


async def get_token_header(x_token: str = Header()):
    """Reads a custom X-Token header.

    ToDo: for real cases, use the integrated Security utilities <https://fastapi.tiangolo.com/tutorial/security/>

    :param x_token:
    :return:
    """
    if x_token != "fake-super-secret-token":
        raise HTTPException(status_code=400, detail="X-Token header invalid")


async def get_query_token(token: str):
    if token != "jessica":
        raise HTTPException(status_code=400, detail="No Jessica token provided")


Base = declarative_base()
