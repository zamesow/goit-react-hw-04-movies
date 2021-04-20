export default {
  home: '/goit-react-hw-04-movies/',
  movies: '/movies',
  movieDetails: '/movies/:slug',
  // cast: '/movies/:movieId/cast',
  // reviews: '/movies/:movieId/reviews',
};

// '/' - компонент <HomePage>, домашняя страница со списком популярных кинофильмов.
// '/movies' - компонент <MoviesPage>, страница поиска фильмов по ключевому слову.
// '/movies/:movieId' - компонент <MovieDetailsPage>, страница с детальной информацией о кинофильме.
// /movies/:movieId/cast - компонент <Cast>, информация о актерском составе. Рендерится на странице <MovieDetailsPage>.
// /movies/:movieId/reviews - компонент <Reviews>, информация об обзорах. Рендерится на странице <MovieDetailsPage>.

// делаем экспорт для маршрутов (cast и reviews - это вложенная навигация)

('Slug');
// меняем movieDetails: '/movies/:movieId' на '/movies/:slug',
// то же самое делаем и в -> MovieDetailsPageView
