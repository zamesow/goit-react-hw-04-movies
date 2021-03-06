import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

import AppBar from './components/AppBar';

import routes from './routes';

const HomePageView = lazy(() =>
  import('./views/HomePageView' /* webpackChunkName: "home-page-view" */),
);
const MoviesPageView = lazy(() =>
  import('./views/MoviesPageView' /* webpackChunkName: "movies-page-view" */),
);
const MovieDetailsPageView = lazy(() =>
  import(
    './views/MovieDetailsPageView' /* webpackChunkName: "movie-details-page-view" */
  ),
);
const NotFoundPageView = lazy(() =>
  import(
    './views/NotFoundPageView' /* webpackChunkName: "not-found-page-view" */
  ),
);

const App = () => (
  <>
    <AppBar />

    <Suspense fallback={<h1>Загружаем...</h1>}>
      <Switch>
        <Route
          exact
          path={routes.home}
          render={props => {
            return <HomePageView {...props} />;
          }}
        />
        <Route
          exact
          path={routes.movies}
          render={props => {
            return <MoviesPageView {...props} />;
          }}
        />
        <Route
          path={routes.movieDetails}
          render={props => {
            return <MovieDetailsPageView {...props} />;
          }}
        />
        <Route component={NotFoundPageView} />
      </Switch>
    </Suspense>
  </>
);

export default App;

// App.jsx - нам нужно спроэктировать приложение, сделать маршруты, создаём ф-цию
// 4. импорт { Route }
// 5. рендерим раут передавая в него адрес и компонент как ссылку (страница вьюха)
// 6. создаём вьюху HomePageView, импортируем её
// 7. пишем в проп раута component = {} и соответствующий ему path=""
// 8. то же самое делаем с остальными вьюхами
// 9. exact используем там, где нужно точное совпадение, потому что рендер будет даже там, где совпадение path минимальное (HomePageView зарендерится и при /movies, потому что совпадает "/")
('---');
// Cейчас мы можем вводитьадреса только руками, поэтому нам нужно сделатьнормальную навигацию. Если делать ссылку типа <a href="">, то будет перезагрузка браузера, нам это не нужно. Нам нужно только переписать url в адресной строке на тот, который мы укажем, а потом BrouserRouter увидит изменение и перерендерит страницу.

// 10. Импортим Router.Link или { Link }, закинуть в рендер (можно в отдельные <li>), в проп to="" продублировать наши адреса и подписать их между тегами <Link></Link>, он под капотом сам отрендерит теги <a href="">, но изменит только адресную строку без перезагрузки страницы.
// 11. Если перейдём на (пропишем) несуществующий путь, то нужно отрендерить отдельный компонент, создаём NotFoundPageView. Если не передать в него путь, то он будет рендериться всегда (если не передать путь во всех раутах, то все компоненты будут рендериться всегда). Поэтому ставим Switch, чтобы выбирался только один из.
// 12. Импортируем Router.Switch или { Switch }, обворачиваем им все наши рауты

// 13. Для стилизации вместо Link используем NavLink, он использует 2 пропа для объекта инлайн-стилей (создаём const styles = {}) - базовый и активный, но мы будем использовать module.css, поэтому используем className и activeClassName, а styles удаляем.
// 14. Проверяем применение классов в Elements и видим, что activeClassName применяется к Home постоянно - это потому что как и в случае с Route path="/", так и в NavLink to="/" нужно использовать exact там, где необходимо для точного совпадения.

// 15. Для общих свойств (например один автор нескольких книг) есть специальные параметры
// /authors?_embed=books - объект авторов и свойство с массивом объектов книг (встраивает)
// /books?_expand=author - объект книг и свойство с объектом автора (расширяет)
('---');
// Теперь нам нужно сделать запрос на бекенд при нажатии на ссылку, начнём с коллекции всех фильмов в MoviesPageView
('---');
// 27. добавляем раут для MovieDetailsPageView (если ещё не добавили) и exact, чтоб не смешивался, либо пишем эту строку ниже остальных, если нельзя exact, потому что Switch работает сверху вниз. => MovieDetailsPageView
('---');
// --- API и адрес запроса mainUrl прописываем в переменные и передаём пропсами во все рауты
('---');
// status:
// --- 'idle', - простаивание
// --- 'pending', - ожидание
// --- 'resolved', - разрешение
// --- 'rejected' - отклонение

('Разделение кода');
// 48. создаём и импортируем route.js для хранения маршрутов
// --- прописываем динамику в Route path="{} и NavLink to={}
// --- делаем AppBar и переносим туда нужные линки
// --- импортируем AppBar и рендерим выше всех
// -> AppBar

('Динамический import');
// 61. пробуем на ф-ции loader - создаём кнопку и грузим HomePageView для примера
// создаём анонимку loader = () => import('./views/HomePageView');
// --- в кнопке по onClick={() => loader()} одно и то же, что {() => import('./views/HomePageView')}
// --- динамический импорт возвращает промис, поэтому к нему можно добавить .then(console.log)
// --- коментим статический импорт для Home и его раут
// --- получается, что ДИ позволяет ассинхронно загружать куски кода, а webpack разбивает их на отдельные части (чанки, чанкование)

('Suspense, lazy - 01:01:30');
// 62. в реакте есть готовые методы, поэтому import React, {Suspense, lazy}
// кнопку Home можем убрать
// --- при использовании чанкования статический импорт нужно удалить, потому что webpack всё равно включит его в бандл, он видит, что это синхронная зависимость
// --- у lazy другой синтаксис от loader (loader типа вставляем в lazy), всегда есть доки реакта lazy(() => import('./views/HomePageView'));
// --- т.е. мы передаём анонимку, которая возвращает промис.
// --- мы можем наблюдать, как gjckt билда в build/static/js появились новые чанки
// --- то же самое проделываем с остальными компонентами (вьюшками) - добавляем lazy и удаляем статику
// для того, чтобы узнать какой чанк за какой компонент отвечает нужно во внутрь импорта через пробел вставить комментарий, например для home-page: /* webpackChunkName: "home-page" */
// --- lazy работает внутри Suspense api. Когда рендерится ленивый компонент, например HomePageView при рендере раута, то он должен быть обёрнут в компонент Suspense, это т.н. контейнер для ленивых компонентов
// --- его можно сделать один вокруг <Suspense><Switch></Switch></Suspense>
// --- так же есть специальный проп fallback={<Spinner />} - он отобразит что-то, пока компонент загружается, например спиннер, а пишем как jsx-тег на другой компонент
//  63. Cast и Reviews тоже можно обернуть в lazy, но нужно учитывать то, что если компоненты очень малы, то разбиение может ухучшить ситуацию -> MovieDetailsPageView

('Slug'); // 70. доп.занятие
// Свойство location.state
// Слаги
// --- [https://dev.to/fayazara/this-free-tools-for-developers-are-45p3]
// --- `slugify` пакет для создания слагов [https://www.npmjs.com/package/slugify]
// --- regexp101 [https://regex101.com/]

// React Query
// --- Ищите туториалы по react query v3
// --- React Hook Form

// Slug - когда в url используется не id ресурса, а красивая строка с добавленым вконце id-шником
// --- удобство в lowercase и тире между словами вместо символов, а вконце id
// --- удобнее для seo
// --- закидывается slugidy('любая строка') и на выходе получаем [любая-строка]
// --- можно передать любой объект настроек:

// --- slugidy('любая строка', {
//        replacement: '-', // чем разделяем
//        remove: undefined, // что убираем
//        lower: false, // нижний регистр, нам нужен true
//        strict: false, // убрать препинания типа запятых, нам нужен true
//        localea: 'vi' // чем разделяем
//      });
// -> MoviesList

// note // ! https://getquick.link/
// "homepage": "https://zamesow.github.io/goit-react-hw-04-movies/"
