const carousel = document.querySelector('#carousel-slider');
let sliders = [];
let slideIndex = 0; //* contador

export const createSlide = (movies) => {
  
  if(slideIndex == movies.length) {
    slideIndex = 0;
  }

 //* Creating DOM Element
 const slider = document.createElement('div');
 const sliderContent = document.createElement('div');
 const movieTitle = document.createElement('h1');
 const movieDes = document.createElement('p');
 const imgElement = document.createElement('img');

 //* add ClassName
 slider.className = 'slider';
 sliderContent.className = 'slider-content';
 movieTitle.className = 'movie-title';
 movieDes.className = 'movie-des';

 //* attaching all elements 
 slider.appendChild(sliderContent);
 sliderContent.appendChild(movieTitle);
 movieTitle.appendChild(document.createTextNode(movies[slideIndex].original_title));
 movieDes.appendChild(document.createTextNode(movies[slideIndex].overview));
 sliderContent.appendChild(movieDes);
 slider.appendChild(imgElement);
 imgElement.src = `https://image.tmdb.org/t/p/original/${movies[slideIndex].backdrop_path}`;

 carousel.appendChild(slider);

 slideIndex++; //* slideIndex = slideIndex + 1;
//  console.log('El contador es: ' + slideIndex);
 sliders.push(slider);

 //* Adding sliding effect
 if(sliders.length != 0) {
  // console.log(sliders.length)
  // console.log(sliders);
  // sliders[0].style.marginLeft = '100px';
  sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${30 * (sliders.length -2)}px)`;
  // console.log(`calc(-${100 * (sliders.length - 2)}% - ${30 * (sliders.length -2)}px)`);
 }

};