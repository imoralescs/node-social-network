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
   const initialContent = await serverRender();
   res.render('index', { ...initialContent });
});

module.exports = router;