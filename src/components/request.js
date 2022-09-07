export const API_KEY = '15e383204c1b8a09dbfaaa4c01ed7e17';

const request = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=ru&language=ru`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=ru&language=ru`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28&language=ru`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35&language=ru`,
  fetchHorroMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27&language=ru`,
  fetchMystery: `/discover/movie?api_key=${API_KEY}&with_genres=10770&language=ru`,
  fetchRomanticMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749&language=ru`,
  fetchSciFi: `/discover/movie?api_key=${API_KEY}&with_genres=878&language=ru`,
  fetchWestern: `/discover/movie?api_key=${API_KEY}&with_genres=37&language=ru`,
  fetchAnimation: `/discover/movie?api_key=${API_KEY}&with_genres=16&language=ru`,
  fetchTV: `/discover/movie?api_key=${API_KEY}&with_genres=10770&language=ru`,
  searchMovies: `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`,
  getMovieDetails: `https://api.themoviedb.org/3/movie/76341?api_key=${API_KEY}&language=ru`,
};

export default request;
