'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     */
    await queryInterface.bulkInsert('quizzes', [
      {
        "id" : 1,
        "movie_name": "Harry Potter",
        "emoji" : "👦⚡🧹🦉",
        "hint" : "Expecto Patronus!!",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        "id" : 2,
        "movie_name": "Mr. Bean",
        "emoji" : "🚙🧸",
        "hint" : "Rowan Atkinson",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "id" : 3,
        "movie_name": "CastAway",
        "emoji" : " 🏝️🏐🧔",
        "hint" : "Wilson NOOOO!",
        createdAt: new Date(),
        updatedAt: new Date() 
      },
      {
        "id" : 4,
        "movie_name": "Catch me if you can",
        "emoji" : "🏃‍♂️💨🚓",
        "hint" : "Check, Pilot, FBI, Runaway!!",
        createdAt: new Date(),
        updatedAt: new Date() 
      },
      {
        "id" : 5,
        "movie_name": "Snake on the plane",
        "emoji" : "🐍🛩️",
        "hint" : "Flying Snake, Realy??!!",
        createdAt: new Date(),
        updatedAt: new Date() 
      },
      {
        "id" : 6,
        "movie_name": "Shawshank redemption",
        "emoji" : "⛏️🕳️",
        "hint" : "a successful banker,sentenced to life imprisonment at the Shawshank prison",
        createdAt: new Date(),
        updatedAt: new Date() 
      },
      {
        "id" : 7,
        "movie_name": "Lalaland",
        "emoji" : "🕺💃",
        "hint" : "Ryan Gosling and Emma Stone Dancing in the Stars !!",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "id" : 8,
        "movie_name": "Wolf of wall street ",
        "emoji" : "🐺🏛️💰",
        "hint" : "Sell Me This Pen",
        createdAt: new Date(),
        updatedAt: new Date() 
      },
      {
        "id" : 9,
        "movie_name": "Silence of lambs",
        "emoji" : " 🔕🐑🐑🐑",
        "hint" : "Would you like brain for dinner?",
        createdAt: new Date(),
        updatedAt: new Date() 
      },
      {
        "id" : 10,
        "movie_name": "Brokeback Mountain",
        "emoji" : " 👦🏻👦🏻🏕️🏔️",
        "hint" : "two guys......",
        createdAt: new Date(),
        updatedAt: new Date() 
      },
      {
        "id" : 11,
        "movie_name": "Harry Potter",
        "emoji" : "👦⚡🧹🦉",
        "hint" : "Expecto Patronus!!",
        createdAt: new Date(),
        updatedAt: new Date() 
      },
      {
        "id" : 12,
        "movie_name": "Finding nemo ",
        "emoji" : "🔎🐠",
        "hint" : "Hi how are you, my name is Dory",
        createdAt: new Date(),
        updatedAt: new Date() 
      },
      {
        "id" : 13,
        "movie_name": "Blood Diamond",
        "emoji" : "💉💎",
        "hint" : "a Civil war rages through 1990s in Sierra Leone",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "id" : 14,
        "movie_name": "Fight Club",
        "emoji" : "🥊♣️",
        "hint" : "The first rule of project mayhem is you do not ask questions",
        createdAt: new Date(),
        updatedAt: new Date() 
      },
      { 
        "id" : 15,
        "movie_name": "American Beauty",
        "emoji" : "🇺🇲🛀🏼🌹🌹🌹",
        "hint" : "And what do you see?",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "id" : 16,
        "movie_name": "Harry Potter",
        "emoji" : "👦⚡🧹🦉",
        "hint" : "Expecto Patronus!!",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "id" : 17,
        "movie_name": "Detective Conan",
        "emoji" : "⌚💤🕵️👦🏻",
        "hint" : "Sleeping Detective",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "id" : 18,
        "movie_name": "Spongebob squarepants ",
        "emoji" : "🍍🐌🍔",
        "hint" : "I'm ready, i'm Ready!!!",
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        "id" : 19,
        "movie_name": "Charlie and the chocolate factory ",
        "emoji" : "👦🏻🍫🏭",
        "hint" : "Oompa Loompa",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "id" : 20,
        "movie_name": "Ratatouille",
        "emoji" : "🐀👨‍🍳🍝",
        "hint" : "a mouse in the kitchen",
        createdAt: new Date(),
        updatedAt: new Date() 
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     */
     await queryInterface.bulkDelete('quizzes', null, {});
  }
};
