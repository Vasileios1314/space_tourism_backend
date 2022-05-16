"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "crews",
      [
        {
          name: "Douglas Hurley",

          imagesPng: "./assets/crew/image-douglas-hurley.png",
          imagesWebp: "./assets/crew/image-douglas-hurley.webp",

          role: "Commander",
          bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Mark Shuttleworth",

          imagesPng: "./assets/crew/image-mark-shuttleworth.png",
          imagesWebp: "./assets/crew/image-mark-shuttleworth.webp",

          role: "Mission Specialist",
          bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Victor Glover",

          imagesPng: "./assets/crew/image-victor-glover.png",
          imagesWebp: "./assets/crew/image-victor-glover.webp",

          role: "Pilot",
          bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Anousheh Ansari",

          imagesPng: "./assets/crew/image-anousheh-ansari.png",
          imagesWebp: "./assets/crew/image-anousheh-ansari.webp",

          role: "Flight Engineer",
          bio: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("crews", null, {});
  },
};
