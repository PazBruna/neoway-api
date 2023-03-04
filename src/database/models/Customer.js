import Sequelize, { Model } from 'sequelize';

class Customer extends Model {
  static init(sequelize) {
    super.init(
      {
        CPF: {
          type: Sequelize.STRING,
          primaryKey: true,
        },
        private: Sequelize.BOOLEAN,
        incompleto: Sequelize.BOOLEAN,
        ultima_compra: Sequelize.DATE, 
        ticket_medio: Sequelize.FLOAT,
        ticket_ultima_compra: Sequelize.FLOAT,
        loja_frequente: Sequelize.INTEGER,
        ultima_loja: Sequelize.INTEGER,
      },
      {
        sequelize,
        modelName: 'customer',
      }
    );

    return this;
  }
}

export default Customer;
