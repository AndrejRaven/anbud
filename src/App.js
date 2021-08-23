import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import MainLayout from './components/layout/MainLayout/MainLayout';
import store from './redux/store';
import Main from './components/views/Main/Main';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter basename="/">
        <MainLayout>
          <Switch>
            <Route exact path="/" component={Main} />
          </Switch>
        </MainLayout>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
