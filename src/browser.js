'use strict';

import React from 'react';
import {Provider} from 'react-redux';
import {render} from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import {App} from "./shared/app";
import {store} from './shared/redux/store';

render(
    <Provider store={store}>
        <Router>
            <App/>
        </Router>
    </Provider>
, document.getElementById('main'));