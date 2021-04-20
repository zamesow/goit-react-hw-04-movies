import React, { Component } from 'react';
import { getSearchingMovies } from '../services/fetch-api';
import MoviesList from '../components/MoviesList';

import m from './MoviesPageView.module.css';

class MoviesPageView extends Component {
  state = {
    formValue: '',
    movies: [],
    status: 'idle',
  };

  componentDidMount() {
    const moviesList = localStorage.getItem('movies');
    const formValueFromStorage = localStorage.getItem('formValue');
    const parsedMovies = JSON.parse(moviesList);
    const parsedFormValue = JSON.parse(formValueFromStorage);

    if (parsedMovies) {
      this.setState({ movies: parsedMovies });
      this.setState({ formValue: parsedFormValue });
    }
  }

  async componentDidUpdate() {
    const { formValue, status } = this.state;

    if (status === 'pending' && formValue.length !== 0) {
      // const searchQuery = await fetchMovie(formValue);
      getSearchingMovies(formValue).then(searchingMovies => {
        this.setState({
          movies: searchingMovies,
          status: 'resolved',
        }),
          localStorage.setItem('movies', JSON.stringify(searchingMovies));
      });

      localStorage.setItem('formValue', JSON.stringify(formValue));
    }
  }

  handleChange = e => {
    const { value } = e.currentTarget;

    this.setState({ formValue: value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.setState({
      status: 'pending',
    });
  };

  handleClear = () => {
    this.setState({ formValue: '', movies: [], status: 'idle' });
    localStorage.removeItem('movies');
    localStorage.removeItem('formValue');
  };

  render() {
    const { movies } = this.state;
    return (
      <div className={m.container}>
        <div className={m.headBlock}>
          <form className={m.formBar} onSubmit={this.handleSubmit}>
            <button type="button" onClick={this.handleClear}>
              Clear
            </button>

            <input
              type="text"
              name="name"
              value={this.state.formValue}
              onChange={this.handleChange}
            />

            <button type="submit">Search</button>
          </form>
        </div>

        <MoviesList movies={movies} />
      </div>
    );
  }
}
export default MoviesPageView;

// status:
// --- 'idle', - простаивание
// --- 'pending', - ожидание
// --- 'resolved', - разрешение
// --- 'rejected' - отклонение

('---');
// 16. Для запроса нам нужен class и state для записи
// 17. Для запросов импортируем Axios и делаем запрос, когда наш компонент маунтится (нажимаем на ссылку => меняется url в адресной строке => BrowserRouter реагирует и вызывает (маунтит) наш компонент MoviesPageView)
// 18. В консоли видим результат запроса, записываем массив фильмов в state (каждый раз заново, не от предыдущего)
// 19. Рендерим разметку для списка книг, достаём фильмы из стейта и мапим, вставляем id в <li> и рендерим title каждой книги
('---');
// 20. Теперь делаем встроенную навигацию - при нажарии на название (превью) фильма из общего списка, нас должно перекидывать на детальное описание фильма
// 21. Нам нужно из названия сделать ссылку, но чтоб страница не перезагружалась - это { Link }, импортируем обворачиваем в него наши title
// 22. В проп to="" нужно вставить не статический, а динамический адрес, а чтоб у каждой книги был свой - определителем будет id
('---');
// 23. Использование во вложенной навигации постоянно в to= /movies - это антипаттерн магических строк, это плохо, потому что /movies уже используется под основную навигацию. Когда Route path="" совпадает с текущим url (pathname)? то зарендеренный компонент (например наш MoviesPageView) получает от react-router три дополнительных пропса:
// - history (объект для работы с историей)
// - location (обьект, описывающий текущий путь в адресной строке, url)
// --- hash: "" (описывает якорь)
// --- key: "234h4j" (ID записи в истории)
// --- pathname: "/movies" (тот, что мы пишем в рауте)
// --- search: "" (query-стрим)
// --- state: ""
// - match (инфа от совпадении текущего маршрута с url)
// --- isExact: true (если совпал)
// --- params: {}
// --- path: "/movies" (шаблон, на который зарендерился текущий раут, используем для создания вложенных маршрутов)
// --- url: "/movies" (то, что записано в адресной строке, используем для создания вложенной навигации)

// 24. консолим этот url (this.props.match.url) и смотрим, что он сходится с нашим to={/movies}  (или смотрим в React Tools - Components)
// 25. поэтому мы можем вместо статической записи вставить наш динамический проп
('---');
// Теперь нам нужно сделать компонент, который будет рендериться на отдельный фильм - это отдельная страница MovieDetailsPageView
('---');
// 40. переносим весь код из MoviesPageView в HomePageView, т.к. это должна быть страница с формой поиска
// 41. делаем форму для поиска фильмов по ключевому слову
// --- форма с onSubmit и без label
// --- input с type, name, value, onChange
// ------ value должно отображать то, что записывается в state
// ------ onChange должен вызывать метод handleChange, который
// --- кнопка submit
// 42. handleChange записывает в state значение {value} (с нижним регистром) в событии e.currentTarget
// 43. handleSubmit должен иметь неперегружайку e.preventDefault();
// --- переписывает статус на одидающий
// 44. Т.к. у нас state перезаписывается каждый раз при изменениях в форме, то для запроса нужно использовать componentDidUpdate, потому что только в этом случае будет запрос последних изменений в форме
// --- при componentDidUpdate нужно обязательно задать условие if () иначе цикличность
// --- при смене статуса делаем запрос
// --- меняем статус на подтверждённый
// --- пишем ответ в state.movies
// --- очищаем форму
// -> App
('---');
// -> 52. MoviesList
// 45. рендерим с пропами <MoviesList movies={this.state.movies} url={this.props.match.url} />
// 46. переделываем на внутреннюю маршрутизацию Route
// --- в path мы используем динамику, но не match.url, а match.path
// 47. переиспользуем компонент MoviesList закидывая в него такие же пропсы как и в MoviesPageView, но с другим пропсом url={}
// --- для законсоливания данных, можно использовать по данным в state или props метод .find()
('КНОПКА НАЗАД');
// 48. используем localStorage
// --- условия те же, что и при запросе
// --- при апдейте записываем в сторэдж this.state.movies и this.state.formValue
// --- при маунте достаём из сторэджа и парсим
// --- при условии наличия парса сетим по местам

('КНОПКА CLEAR');
// 50. удаляем данные в сторэдже и стейтим дэфолтные значения -> HomePageView

// note // ! добавить rest-пагинацию
// --- currentPage в state
// --- добавить динамику currentPage в адрес
// --- кнопку Загрузить ещё
// --- --- надо в setState от предыдущего записать массив и page + 1
// --- --- создать отдельный метод
// --- --- onClick на метод
