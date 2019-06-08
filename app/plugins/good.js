const Good = require("@hapi/good");

module.exports = {
  plugin: Good,
  options: {
    ops: {
      interval: 1000,
    },
    reporters: {
      myConsoleReporter: [
        {
          module: "@hapi/good-squeeze",
          name: "Squeeze",
          args: [{ log: "*", response: "*" }],
        },
        {
          module: "@hapi/good-console",
        },
        "stdout",
      ],
    },
  },
};
