/**
 * 
 */
var b = require("mysql");
var a  = require("mysql");
process.env["NTBA_FIX_319"] = 1;
var TelegramBot = require('node-telegram-bot-api'),
    telegram = new TelegramBot("719204591:AAHzWaUXnTcpsMtkKqvB4ve88CHLc8kqM_8", { polling: true });
var GestoreTelegram = {
		//chiede al dbms l'id della chat telegram associata alla mail che gli viene passata e manda il messaggio su telegram
		manda_comunicato: function (mail,testo) {
			var sql = "Select Telegram_id as P from Utenti where Email = '"+mail+"';";
            var con2 = a.createConnection({
                              host: "localhost",
                                port: "3306",
                                        user: "utente_progetto",
                                        password: "progetto",
                                database: "Paypal"
                            });
           con2.connect();
           con2.query(sql, function (error, results, fields) {
             if (error){
           	 console.log("errore nel mandare il comunicato telegram");
               
                } else {  
               
          console.log("Il dato è stato prelevato con successo");
          var chat_id = results[0].P;
          telegram.sendMessage(chat_id,testo);	
			
			
		}	});
},
     comandi: function () {
    	 //se l'utente manda il messaggio /attiva sul bot telegram ,vengono inviate le info per attivare 
    	 // la chat (salvare l'id della chat nel dbms
    		telegram.on("text", (message) => {
    			if (message.text == "/attiva") {
    				telegram.sendMessage(message.chat.id, "Il comando che hai appena digitato serve ad abilitare questo bot per gestire le comunicazioni con paipal");
    				telegram.sendMessage(message.chat.id, "Chiaramente per abilitare questa funzionalita è necessario essere registrati al sito,quindi ti chiediamo " +
    						"di inserire la mail con cui ti sei registrato al sito e la password nel seguente formato:" +
    						"login:tua_mail,password");
    			}
    		  
    		});
    		//preleva mail e password e salva l'id della chat nel dbms 
    		telegram.on("text", (message) => {
    			var path = /login,[A-Za-z0-9\.-_]+@[A-Za-z0-9\.]+\.[A-Za-z0-9\.]+,[A-Za-z0-9][A-Za-z0-9][A-Za-z0-9][A-Za-z0-9][A-Za-z0-9]*/;
    			if (path.test(message.text)) {
    				var chat_id = message.chat.id;
    				var credenziali = message.text.split(",");
    				var mail = credenziali[1];
    				var password = credenziali[2];
    				telegram.sendMessage(message.chat.id, "" + mail + "     "+ password+ "   " + chat_id);
    				 var  risultato;
    			        var sql = "Select Password as P from Utenti where Email = '"+mail+"';";
    			                 var con2 = a.createConnection({
    			                                   host: "localhost",
                                port: "3306",
                                        user: "utente_progetto",
                                        password: "progetto",
                                database: "Paypal"
    			                                 });
    			                con2.connect();
    			                con2.query(sql, function (error, results, fields) {
    			                  if (error){
    			                	  telegram.sendMessage(message.chat.id, "La mail non è corretta");
    			                    
    			                     } else {  
    			               console.log("Il dato è stato prelevato con successo");
    			               risultato = results[0].P;
    			                         if (password == risultato) {
    			                        	 
    			                        	 var sql2 = "UPDATE Utenti SET Telegram_id = '"+chat_id+"' WHERE Email = '"+mail+"';";

    			                             var con2 = b.createConnection({
    			                                               host: "localhost",
                                port: "3306",
                                        user: "utente_progetto",
                                        password: "progetto",
                                database: "Paypal"
    			                                             });
    			                            con2.connect();
    			                            var  risultato; 
    			                            con2.query(sql2, function (error, results, fields) {
    			                              if (error){
    			                            	  telegram.sendMessage(message.chat.id, "Errore inserimento");
    			                             
    			                           } else {          
    			                        	   telegram.sendMessage(message.chat.id, "Inserimento andato a buon fine");
    			                         } }); }
    			                            else {
    			                        	 telegram.sendMessage(message.chat.id, "Password errata");	 
    			                     
    			                         }} });
    			}
    		  
    		});	
    	}
}



exports.GestoreTelegram = GestoreTelegram;
