const server = require('./memsocket.js');
const port = 4000;

server.listen(port, () => {
  console.log(`server listening on ${port}`);
});
module.exports = server;