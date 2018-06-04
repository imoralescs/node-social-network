import React from 'react';
import ReactDOMServer from 'react-dom/server';
import regeneratorRuntime from "regenerator-runtime";
import App from '../containers/App';
import url from '../config';
import axios from 'axios';

const serverRender = async () => {
    const response = await axios.get(`${url.development}/api/profile/all`);
    return {
        initialMarkup: ReactDOMServer.renderToString(
            <App />
        ),
        initialData: {
            data: response.data
        }
    }
};

export default serverRender;