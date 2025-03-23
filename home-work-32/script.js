const API_KEY = '7377b7dd';
const BASE_URL = 'https://www.omdbapi.com/';

const searchTextElement = document.getElementById('searchText');
const movieContainerElement = document.getElementById('movieContainer');
const errorContainerElement = document.getElementById('errorContainer');

searchTextElement.addEventListener('input', debounce(onTextInput, 500))

async function onTextInput() {
  movieContainerElement.innerHTML = '';
  errorContainerElement.innerHTML = '';

  const searchString = searchTextElement.value.trim();

  if (!searchString) {
    errorContainerElement.innerHTML = 'Search string is empty';
    return;
  }

  try {
    const found = await findMovie(searchTextElement.value);
    movieContainerElement.innerHTML = found.map(movie => getHtmlForMovie(movie)).join('');

  } catch (error) {
    errorContainerElement.innerHTML = error.message;
  }
}


async function findMovie(searchKey) {
  const searchLink = `${BASE_URL}?apikey=${API_KEY}&s=${searchKey}`;

  const movieData = await fetch(searchLink)
    .then(res => res.json())
    .then(response => {

      if(response.Response === 'False') {
        throw Error(response.Error);
      }
    return response;
  });

  return movieData?.Search;
}

function getHtmlForMovie(movieData) {
  const imgUrl = movieData.Poster?.startsWith('http') ? movieData.Poster : 'images/no-image.png';

  return `
    <div class="movie">
      <img
        src="${imgUrl}"
        alt="${movieData.Title}"
      >
      <span>${movieData.Title}</span>
      <span>${movieData.Year}</span>
    </div>
  `;
}

function debounce(callback, wait) {
  let timer;
  return function(...args) {
    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(() => {
      clearTimeout(timer);
      callback(...args);
    }, wait);
  }
}


