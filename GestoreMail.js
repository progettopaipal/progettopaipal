//Si occupa di inviare le mail 
var nodemailer = require('nodemailer');
//var sendgrid = require('sendgrid')("azure_2433ae7e5ad8b6d98669ea11454aab02@azure.com", "Amolafiga97");
var MailModulo = {
         rsp: "" ,
		//prende in input la mail e il testo da inviare 
		invia_mail : function (mail,testo) {
            
  var Sendgrid = require("sendgrid-web");
      var sendgrid = new Sendgrid({
        user: "azure_2433ae7e5ad8b6d98669ea11454aab02@azure.com",//provide the login credentials
        key:"Amolafiga97"
      });

    sendgrid.send({
    to: mail,
    from: 'pierobelmonte97@outlook.it',
    subject: 'messaggio da paipal',
    html: testo
  }, function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("Success.");
    }
  });
    
        }}
        exports.MailModulo = MailModulo;
