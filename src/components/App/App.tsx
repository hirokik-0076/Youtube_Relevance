import React from 'react';

import { Switch, Route } from 'react-router-dom';
import Routes from '../Routes/Routes';
import { ApiGet_Simple } from './ApiGet';
// import Form from './Form';

import NavigationBar from '../NavigationBar/NavigationBar';

const App: React.FC = () => {
  return (
    <div>
      <NavigationBar />　
      <Switch>
        {Routes.map((route: any) => (
          <Route exact path={route.path} key={route.path}>
            <route.component />
          </Route>
        ))}
      </Switch>
      {/* <Form /> */}
      {
        ApiGet_Simple("https://85d26lpy5f.execute-api.ap-northeast-1.amazonaws.com/default/suggestion")
        }
    </div>
  );
}

export default App;