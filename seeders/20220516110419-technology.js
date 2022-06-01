"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "technologies",
      [
        {
          name: "Launch vehicle",
          imgUrl:
            "https://mars.nasa.gov/imgs/2020/07/25171_rocket-reflection-1x1-br2.jpg",
          description:
            "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Spaceport",
          imgUrl:
            "https://www.kennedyspacecenter.com/-/media/DNC/KSCVC/Attraction-Images/Bus-Tours/Media-Gallery/Vehicle-Assembly-Building-at-KSC-aerial-1200x800.ashx",

          description:
            "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Space capsule",
          imgUrl:
            "https://upload.wikimedia.org/wikipedia/commons/3/33/SpaceX_Crew_Dragon_%28More_cropped%29.jpg",

          description:
            "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("technologies", null, {});
  },
};
