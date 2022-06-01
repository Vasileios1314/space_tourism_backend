"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "crews",
      [
        {
          name: "Douglas Hurley",
          imgUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Douglas_Hurley.jpg/266px-Douglas_Hurley.jpg",
          role: "Commander",
          bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Mark Shuttleworth",
          imgUrl:
            "https://upload.wikimedia.org/wikipedia/commons/3/31/Mark-678x1024.jpg",

          role: "Mission Specialist",
          bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Victor Glover",
          imgUrl:
            "https://upload.wikimedia.org/wikipedia/commons/9/9e/Victor_J._Glover_official_portrait.jpg",

          role: "Pilot",
          bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Anousheh Ansari",
          imgUrl:
            "https://upload.wikimedia.org/wikipedia/commons/f/f9/AnoushehAnsari.jpg",
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
