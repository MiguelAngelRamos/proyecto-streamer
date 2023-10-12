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
  item.addEventListener('mouseover', () => {
    let video = item.children[1];

    video.play();
  });

  item.addEventListener('mouseleave', () => {
    let video = item.childre[1];
    video.pause();
  });
});

const cardContainers = [...document.querySelectorAll('.card-container')];
const preBtns = [...document.querySelectorAll('.pre-btn')];
const nextBtns = [...document.querySelectorAll('.nxt-btn')];

cardContainers.forEach((item, i ) => {
  console.log(item);
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nextBtns[i].addEventListener('click', () => {
    item.scrollLeft += containerWidth - 200;
  }) 

  preBtns[i].addEventListener('click', () => {
    item.scrollLeft -= containerWidth +200;
  })


})