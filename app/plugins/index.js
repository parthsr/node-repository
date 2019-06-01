const Inert = require("@hapi/inert");
const Vision = require("@hapi/vision");
const Swagger = require("./swagger");
const Good = require("./good");

const plugins = [Inert, Vision, Swagger, Good];

module.exports = plugins;
