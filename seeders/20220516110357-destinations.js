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
            "https://img1.pnghut.com/11/12/25/gu6PdMBDAG/astrobiology-galilean-moons-sphere-europa-planetary-habitability.jpg",

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
            "https://p1.hiclipart.com/preview/888/522/323/png-planets-of-star-wars-kashyyyk-icon-png-icon.jpg",

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
