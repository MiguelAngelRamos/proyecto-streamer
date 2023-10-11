import { fetchMovies } from "./api/api-rest.js";
import { generadorCards } from "./card/card.js";
import { createSlide } from "./slide/slide.js";

const getMoviePopular = async () => {
  const data = await fetchMovies('popular');
  generadorCards(data.results);
  // console.log(data);
  setInterval( () => {
    createSlide(data.results);
  }, 4000);

};


getMoviePopular();


const videoCards  = [...document.querySelectorAll('.video-card')];

videoCards.forEach(item => {
  console.log(item);
  item.addEventListener('mouseover', () => {
    let video = item.children[1];

    video.play();
  });

  item.addEventListener('mouseleave', () => {
    let video = item.childre[1];
    video.pause();
  });
});