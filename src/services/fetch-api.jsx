import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '4f24a465004dec8d1f65f162bb769c3a';
export const IMG_URL = 'https://image.tmdb.org/t/p/w500/';

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  api_key: API_KEY,
  language: 'en-US',
};

// запрос на карточку фильма
export const getCastAndReviews = async movieId => {
  try {
    const url = {
      url: `movie/${movieId}`,
      params: {
        append_to_response: 'credits,reviews',
      },
    };
    const { data } = await axios(url, movieId);
    return data;
  } catch (error) {
    alert(error);
    return null;
  }
};

// запрос на поиск фильмов
export const getSearchingMovies = async formValue => {
  try {
    const url = {
      url: 'search/movie',
      params: {
        query: formValue,
        // page: 1,
        // include_adult: false,
      },
    };
    const { data } = await axios(url);
    // console.log(data.results);
    return data.results;
  } catch (error) {
    alert(error);
    return null;
  }
};

// запрос на фильмы в тренде на главной странице
export const getTrendingMovies = async () => {
  try {
    const url = { url: 'trending/movie/week' };
    const { data } = await axios(url);
    // console.log(data.results);
    return data.results;
  } catch (error) {
    alert(error);
    return null;
  }
};

('axios');
// импорт axios
// --- export на каждый элемент, который передаём
// --- note // ! почему не default? - конспект

// задаём КОНСТАНТЫ
// --- рапределить по axios.defaults
// --- они будут под капотом в каждом запросе
// --- --- axios.defaults.baseURL = BASE_URL;
// --- --- axios.defaults.params = { [ключ: значение] как в запросе параметры [ключ=значение] }

// async перед ф-цией
// - try { } catch (error) { alert(error); }
// --- return и в try, и в catch
// --- создаём объект настроек в try { }
// --- const url = { url: 'trending/movie/week' } используется после [axios.defaults.baseURL]
// --- --- const { data } = await axios(url);
// --- если { url: `movie/${movieId}` } с интерполяцией, то параметр ф-ции кидаем в axios дальше
// --- --- const { data } = await axios(url, movieId); [сразу с деструктуризацией ответа]
// --- если в адресе запроса есть ещё параметры, прописываем их тоже в url = {}:
// --- --- url = { url: 'trending/movie/week', params: { append_to_response: 'credits,reviews' } };
