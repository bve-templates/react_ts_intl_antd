import React from 'react';
import { ConfigProvider } from 'antd';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';
import '@/i18n';
import ErrorBoundary from '@/components/errorBoundary';
import ScrollToTop from '@/components/scrollToTop';
import Loadable from '@/components/loadable';
import routes from '@/config/routes';
import { store } from '@/store';
import Pol from '@/utils/polling';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import en_US from 'antd/lib/locale-provider/en_US';

import './index.scss';

const locale = {
  'en-us': en_US,
  'zh-cn': zh_CN,
}['zh-cn'];

async function render() {
  // 启动全局轮询
  // Pol.run();

  ReactDOM.render(
    <Provider store={store}>
      <ConfigProvider locale={locale}>
        <BrowserRouter>
          <ScrollToTop>
            <Switch>
              {routes.map(
                ({ component, path, exact, routes, redirect }: any) => {
                  const C = ErrorBoundary(
                    Loadable(() => import(`${component}`)),
                  );
                  if (routes) {
                    return (
                      <Route path={path} key={path}>
                        <C>
                          <Switch>
                            {routes.map(
                              ({ component, path, exact, redirect }) => {
                                if (redirect) {
                                  return (
                                    <Redirect
                                      key={redirect + 'redirect'}
                                      to={redirect}
                                      from={path}
                                    />
                                  );
                                }
                                return (
                                  <Route
                                    exact={exact}
                                    path={path}
                                    key={path}
                                    component={ErrorBoundary(
                                      Loadable(() => import(`${component}`)),
                                    )}
                                  />
                                );
                              },
                            )}
                          </Switch>
                        </C>
                      </Route>
                    );
                  }
                  if (redirect) {
                    <Redirect
                      key={redirect + 'redirect'}
                      to={redirect}
                      from={path}
                    />;
                  }
                  return (
                    <Route key={path} exact={exact} path={path} component={C} />
                  );
                },
              )}
            </Switch>
          </ScrollToTop>
        </BrowserRouter>
      </ConfigProvider>
    </Provider>,
    document.getElementById('root'),
  );
}

render();