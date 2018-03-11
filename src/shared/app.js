import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {routes} from './routes/routes'

export const App = () => {
    return <Switch>
        {routes.map((route) => <Route key={`ROUTE_${Math.random()}`} {...route} />)}
    </Switch>;
};