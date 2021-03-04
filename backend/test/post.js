var chai = require('chai');
var chaiHttp = require('chai-http');
var app = require('../app');
var should = chai.should();

chai.use(chaiHttp);
describe('posts',  () => {
    describe('/GET all posts', () => {
        it('[valid] retrieve all posts', (done) => {
            chai.request(app)
                .get('/post/all')
                .end((err, res) => {
                    res.should.have.status(200);
                    done();
                });
        });
    });

    describe('/POST a new post without title', () => {
        it('[invalid] no post title', (done) => {
            let post = {
                content: "test",
            };

            chai.request(app)
                .post('/post/add')
                .send(post)
                .end((err, res) => {
                    res.should.have.status(422);
                    res.body.should.have.property('status').eql('unprocessable entity');
                    done();
                });
        });
    });

    describe('/POST a new post with title and content', () => {
        it('[valid] all post params present', (done) => {
            let post = {
                content: "test",
                title: "hello"
            };

            chai.request(app)
                .post('/post/add')
                .send(post)
                .end((err, res) => {
                    res.should.have.status(201);
                    done();
                });
        });
    });
});