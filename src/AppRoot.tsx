import { Suspense, lazy } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { LayoutState } from './interfaces/layoutstate';
import { RootState } from './redux/root';

const routes = [
  {
    path: '',
    exact: true,
    component: lazy(() => import('./modules/landing'))
  }
];


const AppRoot = () => {

  // const layoutState = useSelector((state: RootState) => state.layoutState);

  return (
    <div id='root-container'>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            {
              routes.map(route =>
                <Route
                  key={`/${route.path}`}
                  exact={route.exact ?? false}
                  path={`/${route.path}`}
                  component={route.component}
                />
              )
            }
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
};

export default AppRoot;
