'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('customers', {
      cpf: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true,
        unique: true,
      },
      private: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
      },
      incompleto: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
      },
      ultima_compra: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      ticket_medio: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      ticket_ultima_compra: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      loja_frequente: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      ultima_loja: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });

  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('customers');
  },
};
