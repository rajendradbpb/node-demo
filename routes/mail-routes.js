var express = require('express');
var nodemailer = require('nodemailer');
const { transport } = require('winston');
var router = express.Router();

/* GET users listing. */
router.get('/gmail/auth', function(req, res, next) {

    // in-complete as auth2 play ground could not authorize gmail.
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            type: 'OAuth2',
            clientId: '126348483756-kmvc5a2m2np3jp8eh2i9ia7ag2ohube9.apps.googleusercontent.com',
            clientSecret: 'nmN1abki33J_aIt2VZ9faYQQ'
        }
    });
    
    transporter.sendMail({
        from: 'sender@example.com',
        to: 'recipient@example.com',
        subject: 'Message',
        text: 'I hope this message gets through!',
        auth: {
            user: 'rajendrasahoodbpb@gmail.com',
            refreshToken: '1//04ppJuZkU3_HVCgYIARAAGAQSNwF-L9Ir0uw-bVcUNj2rfQlGeF4cUj2ahfTfgH3AL4Z80Xq_0Q5dW0XtFQ8nDo2zVgobskUsCBw',
            accessToken: 'ya29.a0AfH6SMDHuPA1QPNHRff_kDTFvGxFKvRfLEhtjI9xAXScZ__CPHqZJ-o9dOSTEnJK8VQd-Svn5eGKugpKZNkVSwlMlvL6cfT2aEUcTo98IxUio9KpYgawtM2er7MzLvhaV9OXNKlCI6_Zgdr-8sJOV5no08BqIgct7SCesEOLqw0',
            expires: 1484314697598
        }
    });

    
});
router.get('/gmail', function(req, res, next) {
    var transport = {
        host: 'smtp.gmail.com',
        port: 465,
        secure: true, // use SSL
        auth: {
          user: "rajendrasahoodbpb@gmail.com",
          pass: "Dbpb*8raju"
        }
      };
    var message = {
        from: "rajendrasahoodbpb@gmail.com",
        to: "cet.rajendra2010@gmail.com",
        subject: "Prasodini - test Mail",
        text: "This is a text mail from prosodini.",
        html: "<p>Hellow world</p>"
      };
    let transporter = nodemailer.createTransport(transport);

    transporter.verify(function(error, success) {
        if (error) {
          console.log(error);
        } else {
          console.log("Server is ready to take our messages");
        }
      });

    transporter.sendMail(message)
    .then((data)=> {
        console.log("main sent ",data);
        res.send('success');
    })
    .catch((err) => {
        console.log("Error in sending mail ",err);
        res.send('error');
    })
//   res.send('respond with a resource');
});

module.exports = router;
