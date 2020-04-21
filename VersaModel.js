var a = require("mysql");
var b = require("mysql");
var c = require("mysql");
var d = require("mysql");
var e = require("mysql");
var cod_conto;
var tel = require("./TelegramModulo.js");
var mel = require("./GestoreMail.js");
var VersaModel =  {
	carte_agganciate: function (req,res,mail) {
           console.log(mail);
		res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
        var sql1 = "Select Cod_conto as P from Conto where Email = '"+mail+"';";
                 var con2 = a.createConnection({
                                   host: "localhost",
                                port: "3306",
                                        user: "utente_progetto",
                                        password: "progetto",
                                database: "Paypal"
                                 });
                con2.connect();
                con2.query(sql1, function (error, results, fields) {
                  if (error){
                throw error;   
                     } else {        
                    	 cod_conto = results[0].P;
                         console.log("o:"+cod_conto);
                    	 var  risultato;
                        	var sql2 = "SELECT Num_carta as N , Tipo_carta as T from Metodi_pagamento where Cod_conto = '"+cod_conto+"';";
                        	         var con3 = b.createConnection({
                        	                            host: "localhost",
                                port: "3306",
                                        user: "utente_progetto",
                                        password: "progetto",
                                database: "Paypal"
                        	                         });
                        	        con3.connect();
                        	        con3.query(sql2, function (error, results, fields) {
                        	        	if (!error) {
                                                  console.log(""+results.length);
                        	        	     if (results.length == 0) {
                        	        	    	 var a = [];
                        	        	    	 res.send(a);
                                                        res.end();
                        	        	     }else {
                        	        	    	 var carte = new Array();
                        	        	    	 var h = results.length;
                        	        	    	 for (var i = 0; i < h ;++i) {
                                                          console.log(""+results[i].N + ""+ results[i].T);
                        	        	    		 carte[i] = {
                        	        	    				 num_carta : results[i].N ,
                        	        	    				 tipo : results[i].T
                        	        	    		 }
                        	        	    	 }
                        	        	    	 res.send(carte);
                                                        res.end();
                        	        	     }
                        	        	}
                        	            else {
                        	        		throw error;
                        	        	}
                        	        	
                        	        });
                    	 
                     }
                });

             
		
	},
	invia_comunicazione: function(mail,testo) {
		//
		var sql1 = "Select Canale_preferito as P from Utenti  where Email = '"+mail+"';";
        var con2 = a.createConnection({
                           host: "localhost",
                                port: "3306",
                                        user: "utente_progetto",
                                        password: "progetto",
                                database: "Paypal"
                        });
       con2.connect();
       con2.query(sql1, function (error, results, fields) {
    	  if (!error) {
    		  var canalep = results[0].P;
        	  if (canalep == "Email") {
        		  mel.MailModulo.invia_mail(mail,testo);
        	  }
        	   if(canalep == "Telegram") {
        		   tel.GestoreTelegram.manda_comunicato(mail,testo);
        	  } 
    	  }else {
    		  throw error;
    	  }
    	 
       });
		//
		
		
	},
	carica_dati: function (req,res,dati_versamento) {
		var mail = dati_versamento.mail;
		var carta_scelta = dati_versamento.cartascelta;
		var importo = dati_versamento.importoscelto;
		var data = new Date();
               var dd = data.getDate();
               var mm = data.getMonth()+1;
               var yy = data.getFullYear();
               var datac = ""+dd+"/"+mm+"/"+yy;
		var cod_vers = Math.round(999999999999*Math.random());
                 console.log(carta_scelta);
                console.log(cod_conto);
		res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
        var sql = "INSERT INTO Effettua_versamento  (Cod_vers,Email,Cod_conto,importo,data,num_carta_usata) VALUES ('" + cod_vers + "','" +mail+"','"+cod_conto+"','"+importo+"','"+datac+"','"+carta_scelta+"');";
                 var con4 = c.createConnection({
                                    host: "localhost",
                                port: "3306",
                                        user: "utente_progetto",
                                        password: "progetto",
                                database: "Paypal"
                                 });
                con4.connect();
                con4.query(sql, function (error, results, fields) {
                	if (!error) {
                              var  que = "UPDATE Conto SET Saldo = Saldo + "+importo+"  WHERE Email = '"+mail+"';";
                                var con5 = d.createConnection({
                                    host: "localhost",
                                port: "3306",
                                        user: "utente_progetto",
                                        password: "progetto",
                                database: "Paypal"
                                 });
                            con5.connect();
                            con5.query(que, function (error, results, fields) {
                                if (!error) {
                               res.writeHead(200,{"Content-Type":"text/plain"});
                		res.end("La informiamo che il versamento è stato effettuato con successo");
                                } else {
                               throw error;
                                }
                              });
                	}
                	else {
                		throw error;
                	}
                });
	}
}
exports.VersaModel = VersaModel;
