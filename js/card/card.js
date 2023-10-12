import { truncate } from "../utility/trucate.js";

let containerCard = document.querySelector('.card-container');


//* comienzo a crear la tarjeta
const cardMovie = (movie) => {
  //* crear los elementos principales
  const card = document.createElement('div');
  const img = document.createElement('img');
  const cardBody = document.createElement('div');
  const h2 = document.createElement('h2');
  const p = document.createElement('p');
  const button = document.createElement('button');

  //* Añadir las clases

  card.className = 'card';
  img.className = 'card-img';
  cardBody.className = 'card-body';
  h2.className = 'name';
  p.className = 'des';
  button.className = 'watchlist-btn';

  //* añadir la info del api
  img.src = `https://image.tmdb.org/t/p/original/${movie.poster_path}`;
  img.alt = 'Poster de la pelicula';
  h2.innerText  = movie.original_title;
  p.innerText = truncate(movie.overview, 45);
  button.innerHTML = 'Añadir a favoritos';
  
  //* jerarquia

  cardBody.appendChild(h2);
  cardBody.appendChild(p);
  cardBody.appendChild(button);

  card.appendChild(img);
  card.appendChild(cardBody);

  //* añadir al container
  containerCard.appendChild(card);
};

export const generadorCards = (movieResult) => {
  movieResult.map(movie => cardMovie(movie));
}

