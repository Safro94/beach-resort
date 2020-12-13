import React, { FC } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../../pages/home';
import NotFound from '../../pages/notFound';
import Rooms from '../../pages/rooms';
import Room from '../../pages/room';

import Navbar from '../navbar';

import { HOME, ROOMS, ROOM } from '../../utils/routes';

const App: FC = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path={HOME} component={Home} />
        <Route exact path={ROOMS} component={Rooms} />
        <Route exact path={ROOM} component={Room} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

export default App;
