import axios from 'axios';

export class Movie {
  static API_KEY = '6d25a4756e0ff1ccca3eba13a74efa5c';
  static IMG_PATH = 'https://image.tmdb.org/t/p/w500';
  static mediaType = {
    ALL: 'all',
    MOVIE: 'movie',
    TV: 'tv',
    PERSON: 'person',
  };
  static trendTime = {
    DAY: 'day',
    WEEK: 'week',
  };
  static language = {
    ENGLISH: 'en-US',
    UKRAINIAN: 'uk-UA',
  };
  #page;
  #query;
  #langCurrent;
  #currentTrendTime;

  constructor(query) {
    this.#query = query;
    this.#page = 1;
    this.#langCurrent = Movie.language.ENGLISH;
    this.#currentTrendTime = Movie.trendTime.DAY;
    axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
  }

  get page() {
    return this.#page;
  }

  set page(newPage) {
    this.#page = newPage;
  }

  resetPage() {
    this.#page = 1;
  }

  get query() {
    return this.#query;
  }

  get langCurrent() {
    return this.#langCurrent;
  }

  set langCurrent(newLang) {
    this.#langCurrent = newLang;
  }

  get currentTrendTime() {
    return this.#currentTrendTime;
  }

  set currentTrendTime(newTrendTime) {
    this.#currentTrendTime = newTrendTime;
  }

  async fetchTrend() {
    const options = new URLSearchParams({
      api_key: Movie.API_KEY,
      page: this.#page,
      language: this.#langCurrent,
    });
    const response = await axios.get(
      `trending/${Movie.mediaType.MOVIE}/${this.#currentTrendTime}?${options}`
    );
    return response.data;
  }

  async fetchSearch() {
    const options = new URLSearchParams({
      api_key: Movie.API_KEY,
      page: this.#page,
      query: this.#query,
      language: this.#langCurrent,
    });
    const response = await axios.get(
      `search/${Movie.mediaType.MOVIE}?${options}`
    );
    return response.data;
  }

  async fetchGenre() {
    const options = new URLSearchParams({
      api_key: Movie.API_KEY,
      language: this.#langCurrent,
    });
    const response = await axios.get(
      `genre/${Movie.mediaType.MOVIE}/list?${options}`
    );
    return response.data;
  }

  async fetchById(idMovie) {
    const options = new URLSearchParams({
      api_key: Movie.API_KEY,
      language: this.#langCurrent,
    });
    const response = await axios.get(
      `${Movie.mediaType.MOVIE}/${idMovie}?${options}`
    );
    return response.data;
  }
}
