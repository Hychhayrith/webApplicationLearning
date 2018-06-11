const homepage = require('../controller/homepage');
const user = require('../controller/user');
module.exports = (app)=> {
    app.get('/', homepage.index);  
    app.get('/user', user.index);
}