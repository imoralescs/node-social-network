import express from 'express';
import fs from 'fs';
import path from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from '../../../client/containers/App';
import serverRender from '../../../client/renderers';
import regeneratorRuntime from "regenerator-runtime";

const router = express.Router();

// @route GET /
// @description Display index
// @access Public
router.get('/', async (req, res) => {
    // Loads a template.
    /*
    const pathToHtml = path.join(__dirname, '../../views/index.html');
    const template = fs.readFileSync(pathToHtml, 'utf8');
    
    // Inserts a rendered react component to the loaded template (server-side rendering).
    const renderedHelloWorld = renderToString(<App />);
    const page = template.replace('<!-- CONTENT -->', renderedHelloWorld);
    
    res.status(200).send(page);
    */
   const initialContent = await serverRender();
   response.render('index', { ...initialContent });
});

module.exports = router;