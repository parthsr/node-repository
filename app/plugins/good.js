const Good = require("good");

module.exports = {
  plugin: Good,
  options: {
    reporters: {
      myConsoleReporter: [{
        module: "good-squeeze",
        name: "Squeeze",
        args: [{
          error: "*",
          log: "*",
          response: { exclude: "health" },
          request: "*",
        }],
      },
      "stdout",
      ],
    },
  },
};
