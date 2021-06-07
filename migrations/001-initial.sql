--------------------------------------------------------------------------------
-- Up
--------------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS Category (
  id   INTEGER PRIMARY KEY,
  name TEXT    NOT NULL UNIQUE
);

CREATE TABLE IF NOT EXISTS Post (
  id          INTEGER PRIMARY KEY,
  categoryId  INTEGER NOT NULL,
  data        TEXT    NOT NULL,
  postId      TEXT    NOT NULL UNIQUE,
  CONSTRAINT Post_fk_categoryId FOREIGN KEY (categoryId)
    REFERENCES Category(id) ON UPDATE CASCADE ON DELETE CASCADE
);

ALTER TABLE Post ADD COLUMN postTitle   TEXT     GENERATED ALWAYS AS (json_extract(data, '$.title')) NOT NULL;
ALTER TABLE Post ADD COLUMN postCreated INTEGER  GENERATED ALWAYS AS (json_extract(data, '$.created')) NOT NULL;
ALTER TABLE Post ADD COLUMN postUrl     TEXT     GENERATED ALWAYS AS (json_extract(data, '$.url')) NOT NULL;

CREATE INDEX Post_ix_categoryId ON Post (categoryId);
CREATE INDEX Post_ix_postId ON Post (postId);
CREATE INDEX IF NOT EXISTS Post_ix_postTitle ON Post (postTitle);
CREATE INDEX IF NOT EXISTS Post_ix_postCreated ON Post (postCreated);
CREATE INDEX IF NOT EXISTS Post_ix_postUrl ON Post (postUrl);

--------------------------------------------------------------------------------
-- Down
--------------------------------------------------------------------------------

DROP INDEX Post_ix_categoryId;
DROP INDEX Post_ix_postId;
DROP INDEX Post_ix_postTitle;
DROP INDEX Post_ix_postCreated;
DROP INDEX Post_ix_postUrl;
DROP TABLE Post;
DROP TABLE Category;
