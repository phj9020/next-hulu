const API_KEY = process.env.API_KEY;
const BASE = "https://api.themoviedb.org/3";

export const requests = {
    fetchingTrending: {
        title: "Trending",
        url: `${BASE}/trending/all/week?api_key=${API_KEY}&language=en-US`
    },
    fetchTopRated: {
        title: "Top Rated",
        url:`${BASE}/movie/top_rated?api_key=${API_KEY}&language=en-US`
    },
    fetchActionMovies: {
        title: "Action",
        url:`${BASE}/discover/movie?api_key=${API_KEY}&with-genres=28`
    },
    fetchComedyMovies: {
        title:"Comedy",
        url:`${BASE}/discover/movie?api_key=${API_KEY}&with-genres=35`
    },
    fetchHorrorMovies: {
        title:"Horror",
        url:`${BASE}/discover/movie?api_key=${API_KEY}&with-genres=27`
    },
    fetchRomanceMovies: {
        title:"Romance",
        url:`${BASE}/discover/movie?api_key=${API_KEY}&with-genres=10749`
    },
    fetchMystery: {
        title:"Mystery",
        url:`${BASE}/discover/movie?api_key=${API_KEY}&with-genres=9648`
    },
    fetchSciFi: {
        title:"Sci-Fi",
        url:`${BASE}/discover/movie?api_key=${API_KEY}&with-genres=878`
    },
    fetchWestern: {
        title:"Western",
        url:`${BASE}/discover/movie?api_key=${API_KEY}&with-genres=37`
    },
    fetchAnimation: {
        title:"Animation",
        url:`${BASE}/discover/movie?api_key=${API_KEY}&with-genres=16`
    },
    fetchTV: {
        title: "TV Movie",
        url:`${BASE}/discover/movie?api_key=${API_KEY}&with-genres=10770`
    }
};