const consts = require('../helpers/consts');

const store = require('../store')

module.exports = (session) => {
    store.findUser(session).then((user) => {
        if(!user.preferred_locale){
            session.send("greeting");
            session.send("instructions");
            session.beginDialog('/localePicker');  
        }
        else{
            console.log(user);
        }

    });
};