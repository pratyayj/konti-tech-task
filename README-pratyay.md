# README - Pratyay's Implementation of Konti Technical Tast
Note: only the backend REST API has been implemented.
## Installation
1. Unzip folder
2. Navigate to `backend` directory
3. Run `npm install`
4. After Node modules installation, run `npm start`

The REST API will be served at `localhost:3000`.

## Using API
For posts, both title and content are required fields.

* To **retrieve all posts** make a GET request to the endpoint `/post/all`
* To **retrieve a single post** make a GET request to the endpoint `/post/:id` where :id is the parameter to be filled in with the specific post ID to be retrieved
* To **create a post** make a POST request to the endpoint `/post/add` with a JSON request body that includes the title and content properties. Missing either of these properties will cause the post creation to fail. An example of a valid JSON request body for this endpoint is as follows:

```
{
    "title": "Yay",
    "content": "Prat"
}
```
* To **update a post** make a PUT request to the endpoint `/post/update` with a request JSON body such that includes the title and content properties **AND** the post ID. Missing the post ID will cause the post update to fail. An example of a valid JSON request body for this endpoint is as follows:

```
{
    "id": 3,
    "title": "Prat",
    "content": "Yay"
}
```
* To **delete a single post** make a DELETE request to the endpoint `/post/delete/:id` where :id is the parameter to be filled in with the specific post ID to be deleted

## Points of note 
* To view the list of all posts in a visual form, a simple table has been created and can be viewed at the root address (i.e. `localhost:3000`)
* Some unit tests have been written and can be run with the command `npm test`. However, these tests are not comprehensive. Note also that the unit tests call the actual database and not a mock database
* An AWS RDS database running Postgres is utilized to implement this task. The database is set to public accessible and thus is significantly vulnerable. It will have to be placed behind the appropriate security groups and in the appropriate subnets when working in production
* While a `.env` file is used here for the purpose of simplicity, once again security concerns abound (please don't do anything to my database 🙏)