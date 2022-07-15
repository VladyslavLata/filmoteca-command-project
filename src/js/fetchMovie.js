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
  #page;
  #query;

  constructor(query) {
    this.#query = query;
    this.#page = 1;
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

  async fetchTrend(timeOption = Movie.trendTime.DAY) {
    const options = new URLSearchParams({
      api_key: Movie.API_KEY,
      page: this.#page,
    });
    const response = await axios.get(
      `trending/${Movie.mediaType.MOVIE}/${
        timeOption === Movie.trendTime.WEEK
          ? Movie.trendTime.WEEK
          : Movie.trendTime.DAY
      }?${options}`
    );
    return response.data;
  }

  async fetchSearch() {
    const options = new URLSearchParams({
      api_key: Movie.API_KEY,
      page: this.#page,
      query: this.#query,
    });
    const response = await axios.get(
      `search/${Movie.mediaType.MOVIE}?${options}`
    );
    return response.data;
  }

  async fetchGenre() {
    const options = new URLSearchParams({
      api_key: Movie.API_KEY,
    });
    const response = await axios.get(
      `genre/${Movie.mediaType.MOVIE}/list?${options}`
    );
    return response.data;
  }
}
