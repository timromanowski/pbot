const consts = require('../helpers/consts');

module.exports = (session) => {
    session.send("greeting");
    session.send("instructions");
    session.beginDialog('/localePicker');    
};