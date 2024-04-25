const nodemailer = require('nodemailer');

let mailTransporter = nodemailer.createTransport({
    service: 'outlook',
    auth: {
        user: 'example.mail.com',
        pass: 'passwd'
    }
});

let mailDetail = {
    from: 'example.mail.com',
    to: 'example.mail.com',
    subject: 'Node Mailer Test',
    text: 'mail content'
};

mailTransporter.sendMail(mailDetail, function(error, data){
    if(error){
        console.log(error);
    }
    else{
        console.log("Mail Sent!");
    }
});


