import React, { FC } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../../pages/home';
import NotFound from '../../pages/notFound';
import Rooms from '../../pages/rooms';
import Room from '../../pages/room';

const App: FC = () => {
  return (
    <>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/rooms' component={Rooms} />
        <Route exact path='/rooms/:slug' component={Room} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

export default App;
