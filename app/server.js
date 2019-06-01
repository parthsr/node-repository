const Hapi = require("@hapi/hapi");
const routes = require("./routes");
const plugins = require("./plugins");
const ApiError = require("./utils/ApiError");

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

server.ext("onPreResponse", (request, h) => {
  const { response } = request;
  if (response.isBoom) {
    return ApiError.handleErrors(request, h);
  }
  return h.response(request.response);
});

process.on("unhandledRejection", (err) => {
  console.log(err);
  process.exit(1);
});

init();

module.exports = server;
