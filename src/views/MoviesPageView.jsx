import React, { Component } from 'react';
// import Axios from 'axios';

class MoviesPageView extends Component {
  state = {
    filmQuery: '',
  };

  handleChange = e => {
    const { value } = e.currentTarget;

    this.setState({ filmQuery: value });
  };

  async componentDidMount() {
    // const searchQuery = await Axios.get(
    //   `https://api.themoviedb.org/3/search/movie?api_key=${API}&language=en-US&page=1&include_adult=false`,
    // );
  }

  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    return (
      <div className="container-fluid">
        <form className="code" onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="name"
            value={this.state.filmQuery}
            onChange={this.handleChange}
          />

          <button type="submit">Search</button>
        </form>
      </div>
    );
  }
}

export default MoviesPageView;

// 16. Для запроса нам нужен class и state для записи
// 17. Для запросов импортируем Axios и делаем запрос, когда наш компонент маунтится (нажимаем на ссылку => меняется url в адресной строке => BrowserRouter реагирует и вызывает (маунтит) наш компонент MoviesPageView)
// 18. В консоли видим результат запроса, записываем массив фильмов в state (каждый раз заново, не от предыдущего)
// 19. Рендерим разметку для списка книг, достаём фильмы из стейта и мапим, вставляем id в <li> и рендерим title каждой книги
('---');
// 20. Теперь делаем встроенную навигацию - при нажарии на название (превью) фильма из общего списка, нас должно перекидывать на детальное описание фильма
// 21. Нам нужно из названия сделать ссылку, но чтоб страница не перезагружалась - это { Link }, импортируем обворачиваем в него наши title
// 22. В проп to="" нужно вставить не статический, а динамический адрес, а чтоб у каждой книги был свой - определителем будет id
('---');
// 23. Использование во вложенной навигации постоянно в to= /movies - это антипаттерн магических строк, это плохо, потому что /movies уже используется под основную навигацию. Когда Route path="" совпадает с текущим url (pathname)? то зарендеренный компонент (например наш MoviePageView) получает от react-router три дополнительных пропса:
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
