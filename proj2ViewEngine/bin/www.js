const app = require('../app');
const debug = require('debug')('pcrepair:server');
const http = require('http');


/*
    GET Port from environment and store that port in express.
*/
var port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

/*
 * Create HTTP server
 */

var server = http.createServer(app);

server.listen(port, () => {
    console.log("Running on port: " + port);
});
server.on('error', onError);
server.on('listening', onListening);

/* 
 * Normalize a port into a number, String or false.
 */
function normalizePort(val){
    var port = parseInt(val, 10);
    if(isNaN(port)) return val;
    if(port >= 0) return port;
    return false;
}

function onError(error){
    if(error.syscall !== 'listen'){
        throw error;
    }

    var bind = typeof port === 'string' ? 'Pipe ' + port: 'Port ' + port;

    switch(error.code){
        case 'EACCESS':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default: 
            throw error;
    }
}

//************ *
    //Event Listener for HTTP server 'Listening' event
//**************** *//
function onListening(){
    var addr = server.address();
    var bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr;
    debug('Listening on ' + bind);
}

