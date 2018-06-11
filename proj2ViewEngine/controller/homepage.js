const express = require('express');
const router = express.Router();

// //Get Home Page
// router.get('/', (req, res, next) => {
//     res.render('index', {
//         title: 'Express',
//         name: 'John Doe'
//     })
// })
module.exports = {
    index(req, res, next)   {
        res.render('index', {
            title: 'Express', 
            name: 'John Doe'
        })
    }
};