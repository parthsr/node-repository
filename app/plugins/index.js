const Good = require("./good");
const Swagger = require("./swagger");

let plugins = [Swagger];
if (process.env.NODE_ENV !== "test") {
  plugins = plugins.concat([Good]);
}

module.exports = plugins;
