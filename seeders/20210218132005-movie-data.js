'use strict';
const fs = require('fs')
module.exports = {
  up: (queryInterface, Sequelize) => {
    const movieData = JSON.parse(fs.readFileSync('./movie-emoji.json', 'utf-8'))
    for (const i of movieData) {
      i.createdAt = new Date()
      i.updatedAt = new Date() 
    }
    return queryInterface.bulkInsert('quizzes', movieData, {})
    
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('quizzes', null, {})
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
