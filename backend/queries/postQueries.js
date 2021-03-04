const ALL_POST_QUERY = `
    SELECT *
    FROM post;
`;

const ADD_POST_QUERY = `
    INSERT INTO post(title, content)
    VALUES($1, $2);
`;

const GET_POST_QUERY = `
    SELECT *
    FROM post
    WHERE id = $1
`;

const UPDATE_POST_QUERY = `
    UPDATE post
    SET title = $2, content = $3
    WHERE id = $1
`;

const UPDATE_POST_TITLE_QUERY = `
    UPDATE post
    SET title = $2
    WHERE id = $1
`;

const UPDATE_POST_CONTENT_QUERY = `
    UPDATE post
    SET content = $2
    WHERE id = $1
`;

const DELETE_POST_QUERY = `
    DELETE FROM post
    where id = $1;
`;

const POST_EXISTS_QUERY = `
    SELECT EXISTS (
        SELECT 1 FROM post where id=$1
    )
`;

module.exports = {
    ALL_POST_QUERY,
    ADD_POST_QUERY,
    GET_POST_QUERY,
    UPDATE_POST_QUERY,
    UPDATE_POST_TITLE_QUERY,
    UPDATE_POST_CONTENT_QUERY,
    DELETE_POST_QUERY,
    POST_EXISTS_QUERY
};