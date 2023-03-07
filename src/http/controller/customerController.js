import uploadFileMiddleware from "../../middlewares/multerValidator";
import { 
  addCustomersDomain, 
  getCustomerDomain, 
  updateCustomerDomain,
  deleteCustomerDomain
 } from "../../domain/customers/index";

/*
 * Endpoint de registro de todos os customers
 */

export const addAllCustomers = async (req, res) => {

    //Lê arquivo txt na request
    await uploadFileMiddleware(req, res)
    
    const { file } = req;
  
    await addCustomersDomain(file);
  
    return res.status(201).json({ status: 'Success', date: new Date() });
};

/*
 * Pegar registro de customer pelo cpf
 */

export const getCustomerByCpf = async (req, res) => {
   const { cpf } = req.params;

  const customer = await getCustomerDomain(cpf);

  return res.status(201).json(customer);
};

/*
 * Atualizar registro de customer pelo cpf
 */

export const updateCustomerByCpf = async (req, res) => {
  const { cpf } = req.params;
  const data = req.body;

  await updateCustomerDomain(cpf, data);

  return res.status(201).json({ status: 'Success', date: new Date() });
};

/*
 * Deletar registro de customer pelo cpf
 */

export const deleteCustomerByCpf = async (req, res) => {
  const { cpf } = req.params;

  await deleteCustomerDomain(cpf);

  return res.status(201).json({ status: 'Success', date: new Date() });
};
