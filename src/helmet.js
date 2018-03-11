import React from "react";
import Helmet from 'react-helmet';

export const DefaultHelmet = () => (
    <Helmet defaultTitle="LINE Pay">
        <html leng="ne"/>

        <meta charSet="utf-8"/>
        <meta name="format-detection" content="telephone=no"/>
        <meta httpEquiv="X-UA-Compatible" content="IE=Edge"/>

        <meta name="viewport" content="width=device-width"/>
        <meta name="viewport" content="initial-scale=1"/>
        <meta name="viewport" content="maximum-scale=1"/>
        <meta name="viewport" content="minimum-scale=1"/>
        <meta name="viewport" content="viewport-fit=cover"/>
        <meta name="viewport" content="user-scalable=no"/>
    </Helmet>
);