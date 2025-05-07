const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const bars = document.querySelectorAll(".load-bar__bar"); // Selecciona todas las barras

btn.addEventListener("click", function () {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }
  document.body.style.backgroundColor = hexColor;

  // Detectar si el color es oscuro y cambiar el color del texto
  const textColor = isDarkColor(hexColor) ? "white" : "black";
  document.body.style.color = textColor; // Cambia el color del texto del body

  // Cambiar el color de los títulos
  const titles = document.querySelectorAll("h1,h2,h4, h5, h6,.fecha ,.profile__skill-name, .home__button, .header__text,.footer__text"); // Selecciona todos los títulos y elementos de texto
  titles.forEach((title) => {
    title.style.color = textColor;
  });

  // Cambiar el fondo y el color del texto dentro de las barras
  bars.forEach((bar) => {
    if (isDarkColor(hexColor)) {
      bar.style.backgroundColor = "white"; // Cambiar el fondo de cada barra a blanco
      bar.style.color = "black"; // Cambiar el color del texto dentro de la barra a negro
    } else {
      bar.style.backgroundColor = "black"; // Cambiar el fondo de cada barra a negro
      bar.style.color = "white"; // Cambiar el color del texto dentro de la barra a blanco
    }
  });
});

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}

// Función para detectar si un color hexadecimal es oscuro
function isDarkColor(hexColor) {
  const r = parseInt(hexColor.slice(1, 3), 16); // Rojo
  const g = parseInt(hexColor.slice(3, 5), 16); // Verde
  const b = parseInt(hexColor.slice(5, 7), 16); // Azul
  const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
  return luminance < 128;
}



