const etsMods = require('../database/ets2.json');

const jsonServer = require('json-server');
const server = jsonServer.create();
const middlewares = jsonServer.defaults();

server.use(jsonServer.bodyParser);
server.use(middlewares);

// TODO:
// # add Mod via website
// # rate Mod
// # archive Mod
// # pack & download everything

server.listen(5002, () => {
  console.log(`The ModManager server listens on port ${5002}.`);
});
