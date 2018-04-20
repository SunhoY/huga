'use strict';

import React from 'react';
import {renderToString} from 'react-dom/server';
import {StaticRouter as Router, matchPath} from "react-router";
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {routes} from "./shared/routes/routes";
import {App} from './shared/app';
import express from 'express';
import {reducers} from "./shared/redux/reducer";
import cookieParser from 'cookie-parser';
import helmet from 'react-helmet';

let app = express();

app.use(cookieParser());

app.get('*', async (req, res) => {
    const store = createStore(reducers, {}, applyMiddleware(thunk));
    const context = {};

    let foundPath = null;

    let {component} = routes.find(({path, exact}) => {
        foundPath = matchPath(req.url, {path, exact, strict: false});

        return foundPath !== null;
    }) || {};

    if(!component) {
        component = {};
    }

    if(!component.fetchData) {
        component.fetchData = () => Promise.resolve();
    }

    await component.fetchData({store, params: foundPath === null ? {} : foundPath.params});

    let preloadedState = store.getState();

    const html = renderToString(
        <Provider store={store}>
            <Router location={req.url}
                    context={context}>
                <App/>
            </Router>
        </Provider>
    );

    const helmetData = helmet.renderStatic();

    if(context.url) {

    } else if (foundPath && foundPath === '/404') {
        res.status(404).send(renderPage(html, preloadedState, helmetData));
    } else {
        res.send(renderPage(html, preloadedState, helmetData));
    }
});

app.listen(4000, () => {
    console.log("listening..")
});

const renderPage = (html, preloadedState, helmetData) => `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        ${helmetData.title.toString()}
        <meta charset="utf-8">
        <meta name="format-detection" content="telephone=no">
        <meta http-equiv="X-UA-Compatible" content="IE=Edge">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, viewport-fit=cover, user-scalable=no">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    </head>
    
    <body>
        <div id="main">${html}</div>
    </body>
    </html>
`;

