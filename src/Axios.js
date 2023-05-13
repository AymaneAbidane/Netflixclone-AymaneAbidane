import Axios from "axios";

const instance = Axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default instance;
//https://api.themoviedb.org/3/discover/tv?api_key=6fab127444ee1c6504de5fcec39eeb68&with_networks=213
