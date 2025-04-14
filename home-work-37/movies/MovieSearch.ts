import {debounce} from "./utilities.js";

type MovieData = {
    Title: string;
    Year: string;
    Poster?: string;
};

type MovieApiResponse = {
    Search: MovieData[];
    Response: string;
    Error?: string;
};

export class MovieSearch {
    //variables
    API_KEY: string = "";
    BASE_URL: string = "";
    private id: string = "";
    private searchTextElement: HTMLInputElement;
    private movieContainerElement: HTMLElement;
    private errorContainerElement: HTMLElement;

    constructor(API_KEY: string, BASE_URL: string, id: string) {
        this.API_KEY = API_KEY;
        this.BASE_URL = BASE_URL;
        this.id = id;

        //Subscribe DOM elements
        this.searchTextElement = document.getElementById('searchText') as HTMLInputElement;
        this.movieContainerElement = document.getElementById('movieContainer') as HTMLElement;
        this.errorContainerElement = document.getElementById('errorContainer') as HTMLElement;

        //"Enable" search
        this.subscribeDOMElements();
    }

    getHtmlForMovie(movieData: MovieData): string   {
        const imgUrl: string = movieData.Poster?.startsWith('http') ? movieData.Poster : 'images/no-image.png';

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

    async findMovie(searchKey: string): Promise<MovieData[]> {
        const searchLink = `${this.BASE_URL}?apikey=${this.API_KEY}&s=${searchKey}`;

        const movieData: MovieApiResponse = await fetch(searchLink)
            .then(res => res.json())
            .then(response => {

                if(response.Response === 'False') {
                    throw Error(response.Error);
                }
                return response;
            });

        return movieData?.Search;
    }

    async onTextInput():Promise<void> {
        this.movieContainerElement.innerHTML = '';
        this.errorContainerElement.innerHTML = '';

        const searchString: string = this.searchTextElement.value.trim();

        if (!searchString) {
            this.errorContainerElement.innerHTML = 'Search string is empty';
            return;
        }

        try {
            const found = await this.findMovie(this.searchTextElement.value);
            this.movieContainerElement.innerHTML = found.map(movie => this.getHtmlForMovie(movie)).join('');

        } catch (caughtError: unknown) {
            const error = caughtError as Error;
            this.errorContainerElement.innerHTML = `<div class="error">${error.message}</div>`;
        }
    }

    //Add listeners to chosen DOM elements
    subscribeDOMElements(): void {
        this.searchTextElement.addEventListener('input', debounce(this.onTextInput.bind(this), 500));
    }
}