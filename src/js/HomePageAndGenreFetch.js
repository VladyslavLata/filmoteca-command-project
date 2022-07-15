import { Movie } from './fetchMovie';

const LS_GENRE_KEY = 'themoviedb.org-genre';

startPageVisit();

async function startPageVisit() {
  const trendMovie = new Movie();
  await genreLoad(trendMovie);
  await trendMovie
    .fetchTrend()
    .then(data => {
      console.log(data);
      data.results.map(movieItem => {
        // console.log(movieItem);
        console.log(`Poster: ${Movie.IMG_PATH + movieItem.poster_path}`);
        console.log(`Title: ${movieItem.title}`);
        console.log(
          `${genreFind(movieItem.genre_ids)} | ${parseInt(
            movieItem.release_date,
            10
          )}`
        );
      });
    })
    .catch(error => console.log(error));
}

async function genreLoad(classInstance) {
  const genre = localStorage.getItem(LS_GENRE_KEY);
  if (!genre) {
    await classInstance
      .fetchGenre()
      .then(data => {
        localStorage.setItem(LS_GENRE_KEY, JSON.stringify(data.genres));
      })
      .catch(error => console.log(error));
  }
}

function genreFind(genreList = []) {
  const genreLS = localStorage.getItem(LS_GENRE_KEY);
  const noGenre = 'No genres';
  const genreOther = 'Other';

  if (!genreLS || genreList.length === 0) {
    return noGenre;
  }
  const genreArray = JSON.parse(genreLS);
  const genreResult = genreArray.reduce((previousValue, element) => {
    if (genreList.includes(element.id)) {
      previousValue.push(element.name);
    }
    return previousValue;
  }, []);

  if (genreResult.length === 0) {
    return noGenre;
  } else if (genreResult.length > 3) {
    return `${genreResult[0]}, ${genreResult[1]}, ${genreOther}`;
  } else {
    return genreResult.join(', ');
  }
}
