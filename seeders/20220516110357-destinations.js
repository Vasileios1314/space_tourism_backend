"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "destinations",
      [
        {
          name: "Moon",
          imgUrl:
            "https://cdn.picpng.com/moon/moon-planet-space-astronomy-58861.png",
          description:
            "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
          distance: "384,400 km",
          travel: "3 days",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Mars",
          imgUrl:
            "https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2020/05/planet_mars/22006528-1-eng-GB/Planet_Mars_pillars.png",

          description:
            "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
          distance: "225 mil. km",
          travel: "9 months",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Europa",
          imgUrl:
            "https://upload.wikimedia.org/wikipedia/commons/e/e4/Europa-moon-with-margins.jpg",

          description:
            "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
          distance: "628 mil. km",
          travel: "3 years",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Titan",
          imgUrl:
            "https://media.npr.org/assets/img/2017/10/16/titan-41d62a75c7b7376fe8ff872bb1deec3bc24a4a14.jpeg",

          description:
            "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
          distance: "1.6 bil. km",
          travel: "7 years",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("destinations", null, {});
  },
};
