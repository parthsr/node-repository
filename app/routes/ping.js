module.exports = {
  method: "GET",
  path: "/ping",
  options: {
    description: "PING",
    notes: "Ping route",
    tags: ["api"], // ADD THIS TAG
    validate: {
      // params: {
      //   id: Joi.number()
      //     .required()
      //     .description("the id for the todo item"),
      // },
    },
  },
  handler: (request, h) => h.response("hello")
  // return new Error("I was constructed via the \"new\" keyword!");

  ,
};
