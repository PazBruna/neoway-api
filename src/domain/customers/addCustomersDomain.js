import { cpf, cnpj } from 'cpf-cnpj-validator';
import Customer from '../../models/Customer';

export default async function (file) {
  try {
    const { buffer } = file;
    let str = buffer.toString("utf-8")

    //map para transformar string em array
    let customersLine = str.split('\n').map(line => { return line.split(/\s+/); });

    //Remove primeira linha - cabeçario do txt
    customersLine.shift();

    let customersData = [];
    customersLine.map(async customer => {

      //Regex para remover pontos, traços e barras
      const formatCpf = customer[0].replace(/[^\d]+/g, '')
      const formatLojaFrequente = customer[6].replace(/[^\d]+/g, '')
      const formatUltimaLoja = customer[7].replace(/[^\d]+/g, '')

      if (cpf.isValid(formatCpf)
        && cnpj.isValid(formatLojaFrequente)
        && cnpj.isValid(formatUltimaLoja)) {

        customersData.push({
          cpf: formatCpf,
          private: parseInt(customer[1]),
          incompleto: parseInt(customer[2]),
          ultima_compra: new Date(customer[3]),
          ticket_medio: parseFloat(customer[4].replace(",", ".")),
          ticket_ultima_compra: parseFloat(customer[5].replace(",", ".")),
          loja_frequente: formatLojaFrequente,
          ultima_loja: formatUltimaLoja,
          created_at: new Date(),
          updated_at: new Date(),
        })
      }
    })

    // for (const customerData of customersData) {
    //   if (customerData) {
    //     await Customer.create(customerData);
    //   }
    // }

    await Customer.create({
      cpf: '466447458065',
      private: 1,
      incompleto: 1,
      ultima_compra: new Date(),
      ticket_medio: 33.30,
      ticket_ultima_compra: 40.40,
      loja_frequente: '123456',
      ultima_loja: '1234567',
      created_at: new Date(),
      updated_at: new Date(),
    })
    return;
  } catch (error) {
    return {
      error: {
        code: '@customer/customer-not-created',
        message: 'Invalid Payload',
        details: error.message,
      },
    }
  }

};
