const Api_Key = "6fab127444ee1c6504de5fcec39eeb68";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${Api_Key}&language=en=US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${Api_Key}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${Api_Key}&language=en=US`,
  fetchActionMovies: `/discover/movie?api_key=${Api_Key}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${Api_Key}&with_genres=35`,
  fetchHorroreMovies: `/discover/movie?api_key=${Api_Key}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${Api_Key}&with_genres=10749`,
  fetchDocumentries: `/discover/movie?api_key=${Api_Key}&with_genres=99`,
};

export default requests;
