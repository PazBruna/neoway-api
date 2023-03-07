const { DataTypes } = require('sequelize');
import sequelize from '~/database/sequelize';

const Customer = sequelize.define('Customer', {
    cpf: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    private: {
      type: DataTypes.BOOLEAN
    },
    incompleto: {
      type: DataTypes.BOOLEAN
    },
    ultima_compra: {
      type: DataTypes.DATE
    },
    ticket_medio: {
      type: DataTypes.FLOAT
    },
    ticket_ultima_compra: {
      type: DataTypes.FLOAT
    },
    loja_frequente: {
      type: DataTypes.STRING
    },
    ultima_loja: {
      type: DataTypes.STRING
    },
    created_at: {
      type: DataTypes.DATE
    },
    updated_at: {
      type: DataTypes.DATE
    },
  });

  
  module.exports = Customer;
