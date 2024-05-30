export const USER_PHOTO =
  "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png";
export const GITHUB_PHOTO =
  "https://avatars.githubusercontent.com/u/97958691?v=4";
export const Image_BG_NetFlix =
  "https://assets.nflxext.com/ffe/siteui/vlv3/ff5587c5-1052-47cf-974b-a97e3b4f0656/fda21258-f848-4f9e-b6d5-4640cba75dff/PH-en-20240506-popsignuptwoweeks-perspective_alpha_website_large.jpg";
export const LOGO_NETFLIX =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const TMDBAPI_URL =
  "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";
// export const TMDBVIDEO_API_URL ='https://api.themoviedb.org/3/movie/823464/videos?language=en-US'

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w300/";


export const URL_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: process.env.REACT_APP_TMDB_API_KEY,
  },
};

export const SUPPORTED_LANGUAGE = [
  {
    identifier: "en",
    name: "English",
  },
  {
    identifier: "ceb",
    name: "Cebuano",
  },
  {
    identifier: "spanish",
    name: "Spanish",
  },
  {
    identifier: "thai",
    name: "Thai",
  },
  {
    identifier: "kr",
    name: "Korean",
  },
];
