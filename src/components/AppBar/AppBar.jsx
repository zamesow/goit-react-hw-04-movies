import React from 'react';
import Navigation from '../Navigation';

const AppBar = () => {
  return (
    <header>
      <Navigation />
    </header>
  );
};

export default AppBar;

// 49. обворачиваем навигацию в <header>, но...
// 50. даная навигация тут лишь часть AppBar, поэтому выносим её в отдельный компонент Navigation
// --- импортируем и рендерим Navigation в <header> -> Navigation
