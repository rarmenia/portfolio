import React, { Suspense, lazy } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { LayoutState } from './interfaces/layout-state';
import { RootState } from './redux/root';
import Topbar from './shared/topbar/Topbar';

const routes = [
  {
    path: '',
    exact: true,
    component: lazy(() => import('./modules/landing')),
  }
];


const AppRoot = () => {

  const layoutState: LayoutState = useSelector((state: RootState) => state.layoutState);

  return (
    <Router>
      <div id='app-container' className='d-flex flex-column'>
        <div id='topbar-container' role='navigation'>
          {!layoutState.displayTopbar ? '' :
            <Topbar />
          }
        </div>
        <div id='content-container' role='main' className={layoutState.displayTopbar ? 'offset-topbar' : ''}>
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
        </div>
      </div>
    </Router>
  );
};

export default AppRoot;
