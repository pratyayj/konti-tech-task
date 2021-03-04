DROP TABLE IF EXISTS post CASCADE;

ALTER DATABASE postgres SET timezone TO 'Asia/Singapore';

CREATE TABLE post (
    id SERIAL PRIMARY KEY,
    title text NOT NULL,
    content text NOT NULL,
);