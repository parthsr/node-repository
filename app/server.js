const Hapi = require("@hapi/hapi");
const routes = require("./routes");
const plugins = require("./plugins");

const server = Hapi.server({
  port: process.env.NODE_PORT || 3000,
  host: process.env.NODE_HOST || "localhost",
});
const init = async () => {
  await server.route(routes);
  await server.register(plugins);
  await server.start();
  console.log("Server running on %s", server.info.uri);
};

process.on("unhandledRejection", (err) => {
  console.log("hiiii");
  console.log(err);
  process.exit(1);
});

init();

module.exports = server;
