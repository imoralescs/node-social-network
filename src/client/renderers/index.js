import React from 'react';
import ReactDOMServer from 'react-dom/server';
import regeneratorRuntime from "regenerator-runtime";
import App from '../containers/App';

const serverRender = async () => {
    return {
        initialMarkup: ReactDOMServer.renderToString(
            <App />
        ),
        initialData: {}
    }
};

export default serverRender;