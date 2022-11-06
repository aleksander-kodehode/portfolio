import vectorTopRight from "../../img/vectorTopRight.png";
import vectorBottomRight from "../../img/vectorBottomRight.svg";
import pokeDex from "../../img/pokeDex.png";
import pswdGen from "../../img/pswdGen.png";
import todoList from "../../img/todoList.png";
import planetarium from "../../img/planetarium.png";
import profilePic from "../../img/profile_pic.jpg";

export const TEXT_AND_CONTENT = {
  NAVIGATION_BAR: {
    HOME: "Home",
    ABOUT_ME: "About me",
    PROJECTS: "Projects",
    CONTACT: "Contact",
  },
  WELCOME_PAGE: {
    HEADING: "",
    GREETINGS_MSG: "",
    BUTTON: "",
    IMAGES: [vectorTopRight, vectorBottomRight, profilePic],
  },
  ABOUT_PAGE: {
    HEADING: "About Me",
    Pitch:
      "I’m current learning how to code through “Kodehode”, in my spare time I enjoy messing around with selfhosting services and apps through Docker, playing interesting games that takes up way too much time. One of my big passions is cooking and collecting handmade Japanese knifes. Recently I have been doing a deep dive into the world of coding, which I find extremely fun and instructive. I am mostly interested in how apps and websites work on the backend, but I find that styling and making things look good is also a lot of fun!",
    SKILLS: {
      ICONS: [
        "html5",
        "css3",
        "javascript",
        "typescript",
        "react",
        "nodedotjs",
        "mongodb",
        "mysql",
        "git",
        "github",
        "figma",
      ],
    },
  },

  PROJECTS_PAGE: {
    HEADING_PAGE: "Projects",
    PROJECT: [
      {
        NAME: "Planetarium",
        HEADING: "Planetarium",
        DESCRIPTION:
          "Get information about our solar system and watch a live model of it. This was a team exercise with the goal of getting better understanding of git. Built using React",
        URL_REPOSITORY: "https://github.com/aleksander-kodehode/planetarium",
        URL_LIVE: "https://aleksander-kodehode.github.io/planetarium/#/home",
        SCREENSHOT: planetarium,
        ID: 1,
      },
      {
        NAME: "PokeDex",
        HEADING: "PokeDex",
        DESCRIPTION:
          "Browse pokemon based on generations or search for one you would like to see. Click on a pokemon to get more stats of that pokemon. Uses API to fetch data based on parameters, built using Javascript, HTML & CSS",
        URL_REPOSITORY: "https://github.com/aleksander-kodehode/pokeDex",
        URL_LIVE: "https://aleksander-kodehode.github.io/pokeDex/",
        SCREENSHOT: pokeDex,
        ID: 2,
      },
      {
        NAME: "PasswordGenerator",
        HEADING: "Password Generator",
        DESCRIPTION:
          "Simple password generator that allows you to set certain parameters of how you want the password to be, such as password length, symbols and numbers. With a copy to clipboard feature. Built using Javascript, HTML & CSS",
        URL_REPOSITORY:
          "https://github.com/aleksander-kodehode/password-generator/",
        URL_LIVE: "https://aleksander-kodehode.github.io/password-generator/",
        SCREENSHOT: pswdGen,
        ID: 3,
      },
      {
        NAME: "TodoList",
        HEADING: "Todo List",
        DESCRIPTION:
          "Todo list that stores tasks in localStorage. Built using Javascript, HTML & CSS",
        URL_REPOSITORY: "https://github.com/aleksander-kodehode/todoList",
        URL_LIVE: "https://aleksander-kodehode.github.io/todoList/",
        SCREENSHOT: todoList,
        ID: 4,
      },
    ],
  },
  CONTACT_PAGE: {
    HEADING_PAGE: "",
    CONNECTIONS: {
      LinkedIn: "urltoLinkedIn",
      GitHub: "UrlToLinkedIn",
    },
  },
};
