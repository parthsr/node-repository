module.exports = {
  method: "GET",
  path: "/ping",
  options: {
    description: "PING",
    notes: "Ping route",
    tags: ["api"],
    validate: {
    },
  },
  handler: (request, h) => h.response("hello"),
};
