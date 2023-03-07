import AppError from '~/errors/appError';
import Customer from '../../models/Customer';

export default async function (cpf) {
  try {
    const customer = await Customer.findByPk(cpf);

    if(!customer){
       throw new AppError(
        'Customer not found',
        '@customer/customer-not-found',
        400
       )
    }

    return customer;
  } catch (error) {
    return {
      error: {
        message: 'Customer not found',
        service: '@customer/customer-not-found',
        status: 400
      },
    }
  }

};
