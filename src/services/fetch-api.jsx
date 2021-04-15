import Axios from 'axios';

const fetchMovie = (formValue, slug) => {
  const apiKey = '4f24a465004dec8d1f65f162bb769c3a';
  const baseUrl = 'https://api.themoviedb.org/3';
  const creditsAndReviews = 'append_to_response=credits,reviews';

  if (formValue) {
    const fetch = Axios.get(
      `${baseUrl}/search/movie?api_key=${apiKey}&language=en-US&query=${formValue}&page=1&include_adult=false`,
    );

    return fetch;
  }

  if (slug) {
    const fetch = Axios.get(
      `${baseUrl}/movie/${slug}?api_key=${apiKey}&${creditsAndReviews}&language=en-US`,
    );

    return fetch;
  }

  const fetch = Axios.get(`${baseUrl}/trending/movie/week?api_key=${apiKey}`);

  return fetch;
};

export default fetchMovie;
