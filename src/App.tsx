import React from 'react';
import {Route, Routes} from 'react-router-dom';

import './App.scss';
import {DocsIndex} from './docs/DocsIndex';
import {ButtonsDemo} from './docs/pages/buttons/ButtonsDemo';
import {ColorsDemo} from './docs/pages/colors/ColorsDemo';
import {TabsDemo} from './docs/pages/tabs/TabsDemo';
import {MLThemeChanger} from './components/theme-changer/MLThemeChanger';


function App() {
  // const libraryKeys = Object.keys(DocsContent);

  return (
    <div className="app">
      <header className="app__header">
        <h2>Maglev Library</h2>
        <MLThemeChanger />
      </header>
      <main className="app__main">
        <Routes>
          <Route path='/' element={<DocsIndex />} />
          {/* {libraryKeys.map((key, i) => { */}
          {/*  const content = DocsContent[key as keyof typeof DocsContent]; */}
          {/*  return ( */}
          {/*    <Route */}
          {/*        key={i} */}
          {/*        path={content.demo_path} */}
          {/*        component={`${content.name}`} */}
          {/*    /> */}
          {/*  ); */}
          {/* })} */}
          <Route path={'/buttons'} element={<ButtonsDemo />} />
          <Route path={'/colors'} element={<ColorsDemo />} />
          <Route path={'/tabs'} element={<TabsDemo />} />
        </Routes>
      </main>
      <footer className="app__footer">
        I am footer.
      </footer>
    </div>
  );
}

export default App;
