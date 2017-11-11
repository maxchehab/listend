const server = require("./src/server/server");

const dev = process.env.NODE_ENV !== "production";
const next = require("next");
const app = next({ dev });
const handle = app.getRequestHandler();

const { PORT } = require("./lib/constants");

app.prepare().then(() => {
  server.get("*", (req, res) => {
    return handle(req, res);
  });
  /* eslint-disable no-console */
  server.listen(PORT, err => {
    if (err) {
      throw err;
    }
    console.log("> Server ready on http://localhost:" + PORT);
  });
});

module.exports = server;
