import Joi from "joi";
import uploadFileMiddleware from "../../middlewares/multerValidator";
import { addCustomersDomain } from "../../domain/customers";

/*
 * Register
 */
export const addAllCustomers = async (req, res) => {
    await uploadFileMiddleware(req, res)
    
    const { file } = req;
  
    await addCustomersDomain(file);
  
    return res.status(201).json({ status: 'Success', date: new Date() });
};

