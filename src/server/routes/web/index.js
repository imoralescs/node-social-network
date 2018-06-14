import express from 'express';
import fs from 'fs';
import path from 'path';
import React from 'react';
import regeneratorRuntime from "regenerator-runtime";

const router = express.Router();

// @route GET /
// @description Display index
// @access Public
router.get('/', async (req, res) => {
   //const initialContent = await serverRender(req, res);
   //res.render('index', { ...initialContent });
   
   const initialContent = {
       initialMarkup: {},
       initialData: {}
    };
    res.render('index', { ...initialContent });
});

module.exports = router;