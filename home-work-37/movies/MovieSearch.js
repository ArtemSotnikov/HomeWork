var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { debounce } from "./utilities.js";
export class MovieSearch {
    constructor(API_KEY, BASE_URL, id) {
        //variables
        this.API_KEY = "";
        this.BASE_URL = "";
        this.id = "";
        this.API_KEY = API_KEY;
        this.BASE_URL = BASE_URL;
        this.id = id;
        //Subscribe DOM elements
        this.searchTextElement = document.getElementById('searchText');
        this.movieContainerElement = document.getElementById('movieContainer');
        this.errorContainerElement = document.getElementById('errorContainer');
        //"Enable" search
        this.subscribeDOMElements();
    }
    getHtmlForMovie(movieData) {
        var _a;
        const imgUrl = ((_a = movieData.Poster) === null || _a === void 0 ? void 0 : _a.startsWith('http')) ? movieData.Poster : 'images/no-image.png';
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
    findMovie(searchKey) {
        return __awaiter(this, void 0, void 0, function* () {
            const searchLink = `${this.BASE_URL}?apikey=${this.API_KEY}&s=${searchKey}`;
            const movieData = yield fetch(searchLink)
                .then(res => res.json())
                .then(response => {
                if (response.Response === 'False') {
                    throw Error(response.Error);
                }
                return response;
            });
            return movieData === null || movieData === void 0 ? void 0 : movieData.Search;
        });
    }
    onTextInput() {
        return __awaiter(this, void 0, void 0, function* () {
            this.movieContainerElement.innerHTML = '';
            this.errorContainerElement.innerHTML = '';
            const searchString = this.searchTextElement.value.trim();
            if (!searchString) {
                this.errorContainerElement.innerHTML = 'Search string is empty';
                return;
            }
            try {
                const found = yield this.findMovie(this.searchTextElement.value);
                this.movieContainerElement.innerHTML = found.map(movie => this.getHtmlForMovie(movie)).join('');
            }
            catch (caughtError) {
                const error = caughtError;
                this.errorContainerElement.innerHTML = `<div class="error">${error.message}</div>`;
            }
        });
    }
    //Add listeners to chosen DOM elements
    subscribeDOMElements() {
        this.searchTextElement.addEventListener('input', debounce(this.onTextInput.bind(this), 500));
    }
}
