const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3004;

router.render = function (req, res) {
	console.log(res.locals.data.length);
  if (res.locals.data.length == 1) {
    res.locals.data = res.locals.data[0] // "extracts" first item
  }
  res.jsonp(res.locals.data)
}


server.use(middlewares);
server.use(router);

server.listen(port);