import React from 'react';
import { Switch } from 'react-router-dom';

import { MyRoute } from './MyRoute';
import { Menus } from '../pages/Home';
import { Profile } from '../pages/ProjectPage';
import { Cookbook } from '../pages/Profile';
import { Equipamentos } from '../pages/Study';
import { Page404 } from '../pages/Page404';

export function Routes(): JSX.Element {
  return (
    <Switch>
      <MyRoute exact path="/" component={Menus} isClosed />
      <MyRoute exact path="/Profile" component={Profile} isClosed />
      <MyRoute exact path="/Cookbook" component={Cookbook} isClosed />
      <MyRoute exact path="/Equipamentos" component={Equipamentos} isClosed />
      <MyRoute exact path="/Logout" component={Page404} isClosed />
    </Switch>
  );
}
