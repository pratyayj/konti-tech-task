const pool = require('../pool');
const queries = require('../queries/postQueries');
const util = require('./util');

// Retrieves all posts
exports.all = function (req, res, next) {
    pool.query(queries.ALL_POST_QUERY, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            if (result.rows[0] === undefined || result.rows.length == 0) {
                res.status(200).json({
                    posts: "no results"
                });
            } else {
                res.status(200).json({
                    posts: result.rows
                });
            }
        }
    });
};

// Retrieves all posts and displays on root index page (to mock frontend)
exports.display = function (req, res, next) {
    pool.query(queries.ALL_POST_QUERY, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            if (result.rows[0] === undefined || result.rows.length == 0) {
                res.render('index', { title: 'For Konti', data: [] });
            } else {
                res.render('index', { title: 'For Konti', data: result.rows });
            }
        }
    });
};

// Add a post
exports.add = function(req, res, next) {
    const title = req.body.title;
    const content = req.body.content;

    if (util.checkEmpty(title) || util.checkEmpty(content)) {
        res.status(400).json({
            status: "bad request",
            message: "both parameters are compulsory"
        });
    } else {
        pool.query(queries.ADD_POST_QUERY, [title, content], (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.status(201).json({
                    status: "saved post"
                });
            }
        });
    }
};

// Retrieve a single post
exports.read = function (req, res, next) {
    const id = req.params.id;
    if (util.checkEmpty(id)) {
        res.status(400).json({
            status: "bad request",
            message: "how to get post without id"
        });
    }

    pool.query(queries.GET_POST_QUERY, [id], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            if (result.rows[0] === undefined || result.rows.length == 0) {
                res.status(200).json({
                    post: "no results"
                });
            } else {
                res.status(200).json({
                    post: result.rows[0]
                });
            }
        }
    });
};

// Update post
exports.update = function(req, res, next) {
    const id = req.body.id;
    const title = req.body.title;
    const content = req.body.content;

    if (util.checkEmpty(id)) {
        res.status(400).json({
            status: "bad request",
            message: "how to update post without id"
        });
    } else {
        pool.query(queries.POST_EXISTS_QUERY, [id], (err, result) => {
            if (err) {
                console.log(err);
            } else {
                if (result.rows[0].exists) {
                    if (!util.checkEmpty(title) && util.checkEmpty(content)) {
                        pool.query(queries.UPDATE_POST_TITLE_QUERY, [id, title], (err, result) => {
                            if (err) {
                                console.log(err);
                            } else {
                                res.status(200).json({
                                    status: "updated title"
                                });
                            }
                        });
                    } else if (!util.checkEmpty(content) && util.checkEmpty(title)) {
                        pool.query(queries.UPDATE_POST_CONTENT_QUERY, [id, content], (err, result) => {
                            if (err) {
                                console.log(err);
                            } else {
                                res.status(200).json({
                                    status: "updated content"
                                });
                            }
                        });
                    } else if (util.checkEmpty(content) && util.checkEmpty(title)) {
                        res.status(200).json({
                            status: "updated nothing?!"
                        });
                    } else {
                        pool.query(queries.UPDATE_POST_QUERY, [id, title, content], (err, result) => {
                            if (err) {
                                console.log(err);
                            } else {
                                res.status(200).json({
                                    status: "updated title & content"
                                });
                            }
                        });
                    }
                } else {
                    res.status(400).json({
                        status: "bad request",
                        message: "post id does not exist"
                    });
                }
            }
        });
    }
    
};

exports.delete = function (req, res, next) {
    const id = req.params.id;
    if (util.checkEmpty(id) || id === undefined) {
        res.status(400).json({
            status: "bad request",
            message: "id cannot be empty, how to delete"
        });
    } else {
        pool.query(queries.DELETE_POST_QUERY, [id], (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.status(204).json();
            }    
        });
    }
};