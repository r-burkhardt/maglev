import React from 'react';
import {Route, Switch} from 'react-router-dom';

import './App.scss';
import {DocsIndex} from './docs/DocsIndex';
import {ButtonsDemo} from './docs/pages/buttons/ButtonsDemo';
import {ColorsDemo} from './docs/pages/colors/ColorsDemo';
import {MLThemeChanger} from './components/theme-changer/MLThemeChanger';
import {DocControlBlock} from './docs/components/doc-control-block/DocControlBlock';
import {MLFooter} from './components/footer/MLFooter';


function App() {
  // const libraryKeys = Object.keys(DocsContent);

  return (
    <div className="App">
      <header className="App_header">
        <h2>Maglev Library</h2>
        <MLThemeChanger />
      </header>
      <main className="App_main">
        <Switch>
          <Route path='/' exact >
            <DocsIndex />
          </Route>
          {/*{libraryKeys.map((key, i) => {*/}
          {/*  const content = DocsContent[key as keyof typeof DocsContent];*/}
          {/*  return (*/}
          {/*    <Route*/}
          {/*        key={i}*/}
          {/*        path={content.demo_path}*/}
          {/*        component={`${content.name}`}*/}
          {/*    />*/}
          {/*  );*/}
          {/*})}*/}
          <Route path={'/buttons'} component={ButtonsDemo} />
          <Route path={'/colors'} component={ColorsDemo} />
        </Switch>
      </main>
      <MLFooter />
    </div>



  );
}

export default App;
