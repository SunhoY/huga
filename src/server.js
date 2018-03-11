'use strict';

import React from 'react';
import {createServer} from "https";
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
import {asyncMiddleware} from "./middleware/async-middleware";
import {cookieInjector} from './stub/cookie-injector';
import fs from 'fs';

let app = express();

app.use(cookieParser());
app.use(asyncMiddleware(cookieInjector));

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
        component.fetchData = new Promise(resolve => resolve());
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

let options = {
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem')
};

createServer(options, app).listen(3000, () => {
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
    </head>
    
    <body>
        <div id="main">${html}</div>
    </body>
    </html>
`;

