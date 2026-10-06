let headerImg = document.querySelector("header");
let imagen = document.createElement("img");
imagen.src = "assets/banner/1.jpg";
headerImg.appendChild(imagen);

const data = [
  {
    title: "Viaje 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam eum quaerat odio deserunt distinctio consequuntur, fugiat ut velit optio. Temporibus saepe voluptate delectus ab suscipit fugit, quisquam ipsam totam aliqui Autem adipisci incidunt ratione culpa maxime, eaque et sapiente animi fugit fugiat officiis beatae reiciendis ut natus excepturi blanditiis modi. At omnis assumenda velit natus odio fugiat, qui ad incidunt?",
    url_img: "assets/viajes/viajes-1.jpg",
  },
  {
    title: "Viaje 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam eum quaerat odio deserunt distinctio consequuntur, fugiat ut velit optio. Temporibus saepe voluptate delectus ab suscipit fugit, quisquam ipsam totam aliqui Autem adipisci incidunt ratione culpa maxime, eaque et sapiente animi fugit fugiat officiis beatae reiciendis ut natus excepturi blanditiis modi. At omnis assumenda velit natus odio fugiat, qui ad incidunt?",
    url_img: "assets/viajes/viajes-2.jpg",
  },
  {
    title: "Viaje 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam eum quaerat odio deserunt distinctio consequuntur, fugiat ut velit optio. Temporibus saepe voluptate delectus ab suscipit fugit, quisquam ipsam totam aliqui Autem adipisci incidunt ratione culpa maxime, eaque et sapiente animi fugit fugiat officiis beatae reiciendis ut natus excepturi blanditiis modi. At omnis assumenda velit natus odio fugiat, qui ad incidunt?",
    url_img: "assets/viajes/viajes-3.jpg",
  },
];

const sectionRecomendaciones = document.querySelector("#recomendaciones");
let listaArticulo = "";
for (let i = 0; i < data.length; i++) {
  listaArticulo += `<article>
            <img src =${data[i].url_img}>
            <h2>${data[i].title}</h2>
            <p>${data[i].description}</p>
        </article>`;
}
sectionRecomendaciones.innerHTML += listaArticulo;

//let imagenesSrc = document.querySelectorAll("#recomendaciones img");
//let contador = 0;
// for (let i = 0; i <= imagenesSrc.length; i++) {
// imagenesSrc[i].src = `assets/viajes/viajes-${contador + 1}.jpg`;    contador++;
// }
// //Modulo1\EjerciciosDOM\EjercicioDOM\EjercicioPracticaViajes\assets\viajes\viajes-1.jpg

// for (let i = 0; i < imagenesSrc.length; I++) {
//     imagenesSrc[i].textContent = "";

// }
const cities = [
  "Madrid",
  "Barcelona",
  "Valencia",
  "Seville",
  "Bilbao",
  "Granada",
  "Malaga",
  "Palma de Mallorca",
  "Alicante",
  "Zaragoza",
];
const select = document.createElement("select");
for (let i = 0; i < cities.length; i++) {
  const option = document.createElement("option");

  //option.value = cities[i];
  option.textContent = cities[i];

  select.appendChild(option);
}

let sectionDestinos = document.querySelector("#destinos");
sectionDestinos.appendChild(select);
