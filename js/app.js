const container = document.querySelector(".container");
const tsitsipasPics = [
  {
    name: "Tsitsipas vs Fritz | 2019",
    url:"https://www.youtube.com/watch?v=SlW8UPDeFkM",
    image: "images/Tsitsipas1.jpg"
  },
  {
    name: "Tsitsipas vs Coric | 2020",
    url:"https://www.youtube.com/watch?v=doCjglst-Ys",
    image: "images/Tsitsipas2.jpg"
  },
  {
    name: "Djokovic vs Tsitsipas | 2021",
    url:"https://www.youtube.com/watch?v=c7O8a68d_xM",
    image: "images/Tsitsipas3.jpg"
  },
  {
    name: "Tsitsipas vs Medvedev | 2021",
    url:"https://www.youtube.com/watch?v=uLMAxwCz9G0",
    image: "images/Tsitsipas4.jpg"
  },
  {
    name: "Tsitsipas vs Kokkinakis | 2021",
    url:"https://www.youtube.com/watch?v=4ZPSm0-dODc",
    image: "images/Tsitsipas5.jpg"
  },
  {
    name: "Tsitsipas vs Federer | 2019",
    url:"https://www.youtube.com/watch?v=1NVDKXOXZIE",
    image: "images/Tsitsipas6.jpg"
  },
  {
    name: "Tsitsipas vs Zverev | 2021",
    url:"",
    image: "images/Tsitsipas7.jpg"
  },
  {
    name: "Tsitsipas vs Andujar | 2018",
    url:"https://www.youtube.com/watch?v=5sOMVpvva3w",
    image: "images/Tsitsipas8.jpg"
  },
  {
    name: "Medvedev vs Tsitsipas | 2021",
    url: "http://www.paokmania.gr",
    image: "images/Tsitsipas9.jpg"
  }
];
const showTsitsipas = () => {
  let output = "";
  tsitsipasPics.forEach(
    ({ name, image, url }) =>
      (output += `
              <div class="card">
                <img class="card--avatar" src=${image} />
                <h1 class="card--title">${name}</h1>
                <a class="card--link" href="${url}">Game Youtube</a>
              </div>
              `)
  );
  container.innerHTML = output;
};


document.addEventListener("DOMContentLoaded", showTsitsipas);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err));
  });
}
