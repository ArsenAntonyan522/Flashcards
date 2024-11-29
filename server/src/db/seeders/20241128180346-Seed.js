/* eslint-disable no-unused-vars */
"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Cats",
      [
        {
          question: "Где кот?",
          answer: "В мешке",
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "Men",
      [
        {
          question: "Дорогой, может сходим завтра в кино?",
          answer: "Посмотрим",
        },
        {
          question: "Дорогой, может на выходных съездим за город?",
          answer: "Посмотрим",
        },
        {
          question: "Дорогой, может на что-нибудь посмотрим?",
          answer: "Посмотрим",
        },
        {
          question:
            "Дорогой, что мы будем делать, если моей маме вдруг станет плохо?",
          answer: "Посмотрим",
        },
        {
          question: "Дорогой, как ты собираешься сдавать экзамен второй фазы?",
          answer: "Разберёмся",
        },
        {
          question:
            "Дорогой, зачем ты навалил столько кринжа в пятничном проекте?",
          answer: "Просто",
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "Schools",
      [
        {
          question: "Столица Венгрии?",
          answer: "Будапешт",
        },
        {
          question: "Как называется самка собаки?",
          answer: "Сука",
        },
        {
          question: "Как называется самец собаки?",
          answer: "Кобель",
        },
        {
          question: "Кто самый сильный зверь на планете?",
          answer: "Ёж",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
