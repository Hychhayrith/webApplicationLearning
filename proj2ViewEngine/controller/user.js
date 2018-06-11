const express = require('express');
const router = express.Router();

module.exports = {
    index(req, res, next){
        res.send('respond with a resource');
    },

    test(req, res, next){
        res.send('this is a test');
    }
}