const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 5000; // process.env.PORT is Heroku's port if you choose to deploy the app there

server.use(middlewares);
server.use(router);

server.listen(port);
