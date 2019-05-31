// module.exports = {
//   method: "GET",
//   path: "/ping",
//   config: {
//     tags: ["api"],
//     pre: [utils.validateToken],
//     description: "Subscriber product list",
//     notes: "Returns the list of subscribed products of TOL, TVS, TMH, TFL, conv, TFL + TOL bundles and customerName, sharedPlans details",
//     validate: {
//       payload: platformHeaderRequired,
//       header: asas,
//     },
//     handler: (request, h) => new Error("I was constructed via the \"new\" keyword!"),
//   },
// };
