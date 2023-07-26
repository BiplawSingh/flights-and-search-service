'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Airports', [
      {
        name: 'Kempegowda International Airport',
        address: 'KIAL Rd, Devanahalli, Bengaluru, Karnataka 560300',
        cityId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        name: 'Mysuru Airport',
        address: '6MH5+479, Kozhikode-Mysore-Kollegal Hwy, Mysuru, Karnataka 571311',
        cityId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        name: 'Mangaluru International Airport',
        address: 'Bajpe Main Rd, Kenjar HC, Mangaluru, Karnataka 574142',
        cityId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        name: 'Indira Gandhi International Airport',
        address: 'No.367, Badam Singh Market NH-8, Rangpuri, New Delhi, 110037',
        cityId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
