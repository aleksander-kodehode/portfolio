import vectorTopRight from "../../img/vectorTopRight.png";
import vectorBottomRight from "../../img/vectorBottomRight.svg";
import pokeDex from "../../img/pokeDex.png";
import pswdGen from "../../img/pswdGen.png";
import todoList from "../../img/todoList.png";

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
    IMAGES: [vectorTopRight, vectorBottomRight],
  },
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
  PROJECTS_PAGE: {
    HEADING_PAGE: "",
    PROJECT: [
      {
        NAME: "PokeDex",
        HEADING: "PokeDex",
        DESCRIPTION:
          "Browse pokemon based on generations or search for one you would like to see. Click on a pokemon to get more stats of that pokemon. Uses API to fetch data based on parameters, built using Javascript, HTML & CSS",
        URL_REPOSITORY: "https://github.com/aleksander-kodehode/pokeDex",
        URL_LIVE: "https://aleksander-kodehode.github.io/pokeDex/",
        SCREENSHOT: pokeDex,
        ID: 1,
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
        ID: 2,
      },
      {
        NAME: "TodoList",
        HEADING: "Todo List",
        DESCRIPTION:
          "Todo list that stores tasks in localStorage. Built using Javascript, HTML & CSS",
        URL_REPOSITORY: "https://github.com/aleksander-kodehode/todoList",
        URL_LIVE: "https://aleksander-kodehode.github.io/todoList/",
        SCREENSHOT: todoList,
        ID: 3,
      },
      {
        NAME: "PokeDex",
        HEADING: "PokeDex",
        DESCRIPTION:
          "Browse pokemon based on generations or search for one you would like to see. Click on a pokemon to get more stats of that pokemon. Uses API to fetch data based on parameters, built using Javascript, HTML & CSS",
        URL_REPOSITORY: "https://github.com/aleksander-kodehode/pokeDex",
        URL_LIVE: "https://aleksander-kodehode.github.io/pokeDex/",
        SCREENSHOT:
          "https://github.com/aleksander-kodehode/pokeDex/blob/master/img/preview.png",
        ID: 1,
      },
      {
        NAME: "PasswordGenerator",
        HEADING: "Password Generator",
        DESCRIPTION:
          "Simple password generator that allows you to set certain parameters of how you want the password to be, such as password length, symbols and numbers. With a copy to clipboard feature. Built using Javascript, HTML & CSS",
        URL_REPOSITORY:
          "https://github.com/aleksander-kodehode/password-generator/",
        URL_LIVE: "https://aleksander-kodehode.github.io/password-generator/",
        SCREENSHOT:
          "https://github.com/aleksander-kodehode/pokeDex/blob/master/img/preview.png",
        ID: 2,
      },
      {
        NAME: "TodoList",
        HEADING: "Todo List",
        DESCRIPTION:
          "Todo list that stores tasks in localStorage. Built using Javascript, HTML & CSS",
        URL_REPOSITORY: "https://github.com/aleksander-kodehode/todoList",
        URL_LIVE: "https://aleksander-kodehode.github.io/todoList/",
        SCREENSHOT:
          "https://github.com/aleksander-kodehode/pokeDex/blob/master/img/preview.png",
        ID: 3,
      },
    ],
  },
  CONTACT_PAGE: {
    HEADING_PAGE: "",
  },
};
