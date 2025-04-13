import {debounce} from "./utilities.js";

export class MovieSearch {
    //variables
    API_KEY = "";
    BASE_URL = "";

    constructor(API_KEY, BASE_URL, id) {
        this.API_KEY = API_KEY;
        this.BASE_URL = BASE_URL;
        this.id = id;

        this.assignDOMElements();
        //"Enable" search
        this.subscribeDOMElements();
    }

    getHtmlForMovie(movieData) {
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

    async findMovie(searchKey) {
        const searchLink = `${this.BASE_URL}?apikey=${this.API_KEY}&s=${searchKey}`;

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

    async onTextInput() {
        this.movieContainerElement.innerHTML = '';
        this.errorContainerElement.innerHTML = '';

        const searchString = this.searchTextElement.value.trim();

        if (!searchString) {
            this.errorContainerElement.innerHTML = 'Search string is empty';
            return;
        }

        try {
            const found = await this.findMovie(this.searchTextElement.value);
            this.movieContainerElement.innerHTML = found.map(movie => this.getHtmlForMovie(movie)).join('');

        } catch (error) {
            this.errorContainerElement.innerHTML = error.message;
        }
    }

    //Add listeners to chosen DOM elements
    subscribeDOMElements() {
        this.searchTextElement.addEventListener('input', debounce(this.onTextInput.bind(this), 500));
    }

    //Subscribe DOM elements
    assignDOMElements() {
        this.searchTextElement = document.getElementById('searchText');
        this.movieContainerElement = document.getElementById('movieContainer');
        this.errorContainerElement = document.getElementById('errorContainer');
    }
}