from sqlalchemy import Column, Integer, String, Sequence
from sqlalchemy.orm import relationship

from ..deps import Base


class MultiLanguageString(Base):
    __tablename__ = "multiLanguageStrings"
    id = Column(Integer, Sequence('id_seq'), primary_key=True)
    # languageTag, content, translations
    languageTag = Column(String, index=True)
    content = Column(String, index=True)
    translations = relationship("Translation", cascade="all, delete-orphan")

    def __repr__(self):
        return ',\t'.join([f"{self.__tablename__!r}", f"{self.id!r}", f"{self.languageTag!r}", f"{self.content!r}"])
