from sqlalchemy import Column, ForeignKey, Integer, String, Sequence

from ..deps import Base


class Translation(Base):
    __tablename__ = "translations"
    id = Column(Integer, Sequence('id_seq'), primary_key=True)
    # multiLanguageString_id, languageTag, content
    multiLanguageStringId = Column(Integer, ForeignKey("multiLanguageStrings.id"), nullable=False)
    languageTag = Column(String, index=True, unique=True)
    content = Column(String, index=True, unique=True)

    def __repr__(self):
        return ',\t'.join(
            [f"{self.multiLanguageStringId!r}", f"{self.__tablename__!r}", f"{self.id!r}", f"{self.languageTag!r}",
             f"{self.content!r}"])
