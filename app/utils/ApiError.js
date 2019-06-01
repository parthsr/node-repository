const errorConstants = require("../config/errorConstants");

class ApiError extends Error {
  constructor(message, response) {
    super(message);
    this.response = response;
  }

  static handleErrors(error, h) {
    const status = error.response.output.statusCode;
    console.log(status);
    if (!errorConstants[status]) {
      return h.response(error.message).code(status);
    }
    return h.response(errorConstants[status].message).code(status);
  }
}

module.exports = ApiError;
