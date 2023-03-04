import AppError from "../../errors/appError";
import { cpf, cnpj } from 'cpf-cnpj-validator';
//import Customer from '../../database/models/Customer';

export default async (file) => {
  try {
    const { buffer } = file;
    let str = buffer.toString("utf-8")

     //map para transformar string em array
    var customersLine = str.split('\n').map(line => { return line.split(/\s+/);});

    //Remove primeira linha - cabeçario do txt
    customersLine.shift();

    let customers = [];
    customersLine.map(customer => {

      //Regex para remover pontos, traços e barras
      const formatCpf = customer[0].replace(/[^\d]+/g,'')
      const formatLojaFrequente = customer[6].replace(/[^\d]+/g,'')
      const formatUltimaLoja = customer[7].replace(/[^\d]+/g,'')

      if(cpf.isValid(formatCpf) 
      && cnpj.isValid(formatLojaFrequente) 
      && cnpj.isValid(formatUltimaLoja)){
        customers.push({
          CPF: formatCpf,
          private: customer[1],
          incompleto: customer[2],
          ultima_compra: customer[3],
          ticket_medio: customer[4],
          ticket_ultima_compra: customer[5],
          loja_frequente: formatLojaFrequente,
          ultima_loja: formatUltimaLoja,
        })
      }
    })
console.log(customers)
    //await Customer.create(customers)

    return { status: 201, message: "sucess" };
  } catch (err) {
    console.log(err)
    throw new AppError(
      "error to update profile",
      "@profiles/profile_not_updated",
      400
    );
  }
};
