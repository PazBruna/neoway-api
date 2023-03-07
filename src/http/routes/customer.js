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
    {
      method: "DELETE",
      path: "/:cpf",
      description: "Delete a customer by cpf",
      middlewares: [],
      handler: customerController.deleteCustomerByCpf,
    },
    {
      method: "GET",
      path: "/:cpf",
      description: "Get a customer by cpf",
      middlewares: [],
      handler: customerController.getCustomerByCpf,
    },
    {
      method: "PUT",
      path: "/:cpf",
      description: "Update a customer by cpf",
      middlewares: [],
      handler: customerController.updateCustomerByCpf,
    },
  ],
};
