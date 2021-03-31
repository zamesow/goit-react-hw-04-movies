/_ eslint-disable no-return-assign _/ /_ eslint-disable class-methods-use-this
_/ /_ eslint-disable react/no-unused-state _/ /_ eslint-disable
react/destructuring-assignment _/ /_ eslint-disable react/no-unescaped-entities
_/ /_ eslint-disable react/state-in-constructor _/ /_ eslint-disable
react/no-unknown-property _/ /_ eslint-disable no-unused-expressions _/ /_
eslint-disable no-console _/ import React, { Component } from 'react'; import m
from './App.module.css';

class App extends Component { state = { timerIsRun: false, time: null,
intervalId: null, pause: false, startTime: 0, saveTimeNow: 0, deltaTime: 0,
newDeltaTime: 0, };

componentDidMount() { this.stop(); }

// ============================================== управление состояниями

intervalFirstTime = startTime => { const intervalId = setInterval(() => { const
timeNow = Date.now(); const deltaTime = timeNow - startTime;

      this.setState({ saveTimeNow: timeNow, startTime, deltaTime });

      const { hours, mins, secs } = this.getTimeComponents(deltaTime);
      this.viewTime({ hours, mins, secs });
    }, 1000);

    this.setState({ intervalId });

};

intervalAfterPause = () => { const { deltaTime } = this.state;

    const newStartTime = Date.now() - deltaTime;
    const intervalId = setInterval(() => {
      const newDeltaTime = Date.now() - newStartTime;

      this.setState({ deltaTime: newDeltaTime });

      const { hours, mins, secs } = this.getTimeComponents(newDeltaTime);
      this.viewTime({ hours, mins, secs });
    }, 1000);

    this.setState({ intervalId });

};

// ============================================== кнопочки (неоптимизированное
зло)

start = () => { this.setState({ timerIsRun: true, pause: false, deltaTime: 0,
});

    const { intervalId } = this.state;
    clearInterval(intervalId);

    const startTime = Date.now();
    this.intervalFirstTime(startTime);

};

stop = () => { const { intervalId } = this.state; this.setState({ timerIsRun:
true, pause: false, saveDeltaTime: 0 });

    clearInterval(intervalId);

    const { hours, mins, secs } = this.getTimeComponents(0);
    this.viewTime({ hours, mins, secs });

};

togglePause = () => { const { intervalId, pause } = this.state;

    if (!pause) {
      this.setState({ pause: true });
      clearInterval(intervalId);
    }

    if (pause) {
      // const newStartTime = Date.now() - startTime;
      this.setState({ pause: false });
      this.intervalAfterPause();
    }

};

// ============================================== формат отображения времени

viewTime = ({ hours, mins, secs }) => { console.log(`${hours}:${mins}:${secs}`);

    this.setState({
      time: `${hours}:${mins}:${secs}`,
    });

};

// ============================================== ф-лы по высчитыванию времени

pad = value => String(value).padStart(2, '0');

getTimeComponents = time => { const hours = this.pad( Math.floor((time % (1000 _
60 _ 60 _ 24)) / (1000 _ 60 _ 60)), ); const mins = this.pad(Math.floor((time %
(1000 _ 60 _ 60)) / (1000 _ 60))); const secs = this.pad(Math.floor((time %
(1000 \* 60)) / 1000));

    return { hours, mins, secs };

};

render() { const { time } = this.state;

    return (
      <>
        {time && (
          <div className={m.container}>
            <div className={m.btnBlock}>
              <button type="button" className={m.btn} onClick={this.start}>
                Start
              </button>
              <button type="button" className={m.btn} onClick={this.stop}>
                Stop
              </button>
              <button
                type="button"
                className={m.btn}
                onClick={this.togglePause}
              >
                Wait
              </button>
            </div>
            <div className={m.timer}>{time}</div>
          </div>
        )}
      </>
    );

} }

export default App;

// «HH: MM: SS» // кнопки: \* «Start / Stop» - запуск / остановка отсчета
времени, останавливает и обнуляет значение таймера. // «Wait» - работает на
двойной клик (время между нажатиями не более 300 мс!) таймер должен прекратить
отсчет времени; // если после него нажать старт, то возобновляется отсчет. //
«Reset» - сброс секундомера на 0. Обнуляет секундомер и снова начинает отсчет.

('#JS-11'); // ассинхронные ф-ции срабатывают после всего синхронного кода //
--- ставится на стек и выполняется // --- регистрируется в отложенные и
снимается со стека // ------ если есть дальше код, то ставится на стек,
выполняется и снимается // --- переходит в ожидание перед постановой на стек //
--- ставится на стек и выпоняется // --- снимается со стека

// 1. const timerId = setTimeout(() => {}, 1000, args); // --- колбэк или ссылка
на неё // --- вызывает один раз через время

// 2. clearTimeout(timerId); - передаём идентификатор // --- создаётся, при
присвоении setTimeout переменной // --- делается, чтоб не запустился при
каком-то условии, например, если мы вызвали вручную раньше

// 3. setInterval(() => {}, 1000, args); // --- такие же условия

// 4. clearInterval(); // --- остановить интервал ('BOOTSTRAP'); // 5. Bootstrap
js - вставляешь html и их cdn в link // --- [x] если устанавливать через npm, то
установится ещё и js, а там под акпотом jQuery // --- [x] затягивает весь css
бутстрапа, поэтому, если проект не на бутстрапе, то может много весить // ---
для использования в связке с js устанавливаем npm install --save
bootstrap.native // --- import BSN from 'bootstrap-native'; или from
"bootstrap.native/dist/bootstrap-native.esm.min.js"; // 5.1. инициализируем по
их модалке const modal = new BSN.Modal('#subscription-modal'); // --- используем
их методы .show(), .hide() и др. (в нашем случае modal.show()) // --- используем
их названия событий при addEventListener, можно при закрытии модалки снова её
открыть через время // --- при максимальном достижении открытий больше не
открывать // 6. Bootstrap React - https://react-bootstrap.github.io/ // --- npm
install react-bootstrap bootstrap // --- import { Modal, Button } from
'react-bootstrap'; // --- вставляем компоненты в рендер // --- можно
импортировать css, но лучше cdn в <link> index.html ('ДАТА'); // 7. можно
использовать либу date-fns // --- дата в js сложный момент // --- создание даты,
новый экземпляр класса const date = new Date(); // --- для красивого вывода
console.log(date); console.log(date.getDay()); // --- unix-время
console.log(date.getTime());, точка отсчёта от 01.01.1970 00:00 // ---
setTimeout выдаёт тысячные доли с погрешностью // 8. можно получить разницу во
времени // --- можно сразу создать unix-время const date = new Date().getTime();
// --- отложить в setTimeout date2 // --- законсолить разницу (date2 - date1)
// 9. в js управление памятью автоматическое, а в С - не автоматическое
(malloc()/free()) // --- js не создан для мощных нагрузок // --- если на обьъект
нет больше ссылок, то сборщик мусора очищает память // 10. если нужно просто
кол-во мс, то используем метод Date.now(); он просто не создаёт экземпляр // ---
разница во времени как раз и нужна, чтобы считать сколько времени прошло от
времени старта // --- создаём время старта и время сейчас // 11. нужно вывести
время в формате XX:XX:XX, для этого нужна математика // --- функция, которая
принимает время в мс // --- высчитывает сколько в них вмесчается часов, минут и
секунд // --- возвращает объект со своствами hours, mins, secs // --- адская
копипаста со стека Overflow // --- .getUTFHours() - время от Гринвича, не
подходит для таймера с количеством дней // 12. метод pad(value) нужен для
создания формата времени 00 - добавляет 0 слева к одному символу (пока тот один
// --- добавить кнопки start, stop (запуск и очистка интервала) // ---
clockFace - наш циферблат // --- проблема с множественным вызовом при клике на
кномку - добавить isActive // --- для js нужно сделать class и здгпшт // ---
класс не должен знать о обновлении (отрисовке), а заниматься только подсчётом,
потому что можетбыть много разных экземпляров // // --- очистить интервал перед
каждым нажатием // ('---'); // если в JS ты передаёшь метод объекта как коллбэк
в ф-цию, то он скорее вего будет undefined или window, а если в
addEventListener, то this. будет ссылаться на DOM-элемент, на котором высит этот
слушатель. поэтому надо дописывать привязку bind(контекст): // --- [-]
refs.addEventListener('click', timer.start); // --- [+]
refs.addEventListener('click', timer.start.bind(timer)); // --- super() - dspjd
конструктора родителя. принаследовании extense
