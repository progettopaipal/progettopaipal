var nodemailer = require('nodemailer');
var MailModulo = {
         rsp: "" ,
		//prende in input la mail e il testo da inviare 
		invia_mail : function (mail,testo) {
            
			var transporter = nodemailer.createTransport({
				  service: 'Gmail',
				  auth: {
				    user: '',     //insert the user of a Gmail account
				    pass: ''      //insert the password
				  }
				});

				var mailOptions = {
				  from: 'progettopaipal',
				  to: mail,
				  subject: 'Informazioni conto',
				  text: testo
				};

				transporter.sendMail(mailOptions, (error, resStatus) =>  {
				  if (error) {
				    console.log(error);
                    MailModulo.rsp = "errore invio mail";
                   
				  } else {
                    console.log(resStatus);
                    
				    console.log('Email sent: ' + resStatus);
                    MailModulo.rsp = "mail inviata con successo";
                    
				  }
				});
		}
}
exports.MailModulo = MailModulo;


