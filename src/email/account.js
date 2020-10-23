const sgMail = require('@sendgrid/mail')
require('dotenv').config()
//const sendgridapi ="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"

sgMail.setApiKey(process.env.sendgridapi)


const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: 'pg.wankhade94@gmail.com',
        from: 'pg.wankhade94@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'pg.wankhade94@gmail.com',
        subject: 'Sorry to see you go!',
        text: `Goodbye, ${name}. I hope to see you back sometime soon.`
    })
}


module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail 
}