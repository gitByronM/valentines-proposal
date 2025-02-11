// config/proposalScreens.js
export const screens = {
  home: {
    gif: "home.gif",
    heading: "Quieres ser mi san valentin? 🥰",
    message: "Me harías muy feliz diciendo que sí",
    buttons: [
      { text: "SI", to: "/yes" },
      { text: "NO", to: "/no1" }
    ]
  },
  no1: {
    gif: "no1.gif",
    heading: "Estas segura? ya lo pensaste bien? 🤨",
    buttons: [
      { text: "SI", to: "/yes" },
      { text: "NO", to: "/no2" }
    ]
  },
  no2: {
    gif: "no2.gif",
    heading: "Ultima oportunidad! 😥",
    buttons: [
      { text: "SI", to: "/yes" },
      { 
        text: "NO",
        id: "btn-random",
        randomMove: true
      }
    ],
    containerStyle: { position: 'relative' }
  },
  yes: {
    gif: "yes.gif",
    heading: "Siempre supe que dirías que sí 🙈❤️",
    showButtons: false
  }
};