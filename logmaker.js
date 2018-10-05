log4js = require('log4js');
log4js.configure({ // appender is users here wich contains the file users.log.
  appenders : { users :{type:'file',filename : 'users.log'}},
  categories : {default : {appenders :['users'],level:'trace'}}
})
var logger = log4js.getLogger('users'); // we are appnending the user with logger.
logger.trace("Tracing User Data !!");
