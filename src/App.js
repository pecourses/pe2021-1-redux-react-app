import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import './App.css';

import HomePage from './pages/HomePage';
const UserSagaPage = lazy(() => import('./pages/UserSagePage'));
const Counter = lazy(() => import('./components/Counter'));

function App () {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/user-saga-page'>UserSagaPage</Link>
          </li>
          <li>
            <Link to='/counter'>Counter</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Suspense fallback={<div>...Loading...</div>}>
          <Route path='/user-saga-page' component={UserSagaPage} />
          <Route path='/counter' component={Counter} />
        </Suspense>
      </Switch>
    </Router>
  );
}

export default App;
