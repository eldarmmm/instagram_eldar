'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Countries', [
      { name: 'Таджикистан' },
      { name: 'Туркменистан' },
      { name: 'Россия' },
      { name: 'Узбекистан' },
      { name: 'Кыргызстан' },
      { name: 'Украина' },
      { name: 'Беларусь' },
      { name: 'Казахстан' },
      { name: 'Армения' },
      { name: 'Азербайджан' },
      { name: 'Грузия' },
      { name: 'Молдова' },

      // Add more countries as needed
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Countries', null, {});
  }
};
