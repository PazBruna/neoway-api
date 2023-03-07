import * as customerController from "../controller/customerController";

export default {
  scope: "Profile settings",
  prefix: "/customer",
  routes: [
    {
      method: "POST",
      path: "/register",
      description: "Register all customers to database",
      middlewares: [],
      handler: customerController.addAllCustomers,
    },
  ],
};
