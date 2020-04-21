
var a = require("mysql");
var b = require("mysql");
var c = require("mysql");
var d1 = require("mysql");
var PagaEsercizioModel = {
		//controlla che il nome dell'esercizio commerciale esiste nel sistema
		//controlla che l'importo scelto sia compatibile con il saldo oppure con il credito sulla carta
		verifica_dati_pagamento : function (req,res,mail,nome_e,importo,numcarta,periodico,data_f,cadenza) {
			res.header('Access-Control-Allow-Origin', '*');
	        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	        res.writeHead(200,{"Content-Type":"text/plain"});
	        var sql1 = "Select Nome_e from Esercizio_com;";//tutti i nomi degli esercizi commerciali
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
	                		var trovato = false;
	                		for (var i = 0;i < results.length; ++i) {
	                			if (results[i].Nome_e == nome_e) {
	                				trovato = true;
	                				if (numcarta == "0000000000000000") {
	                					var sql2 = "Select Saldo from Conto Where Email = '"+mail+"';";//estrae il saldo
	                        	         var con3 = b.createConnection({
	                        	                            host: "localhost",
                                port: "3306",
                                        user: "utente_progetto",
                                        password: "progetto",
                                database: "Paypal"
	                        	                         });
	                        	        con3.connect();
	                        	        con3.query(sql2, function (error, results, fields) {
	                        	        	console.log(results[0].Saldo);
	                        	        	if (!error) {
	                        	        		if (results[0].Saldo >= importo) {
	                        	        			console.log("oraora");
	                        	        			res.end("I dati sono corretti");//tutto è andato bene 
	                        	        		}
	                        	        		else {
	                        	        			console.log("else");
	                        	        			res.end("Il nome dell'esercizio non esiste oppure il credito nel metodo di pagamento scelto non è sufficiente");//saldo paipal non sufficiente 
	                        	        		}
	                        	        	}
	                        	        	else {
	                        	        		throw error;
	                        	        	}
	                        	        });
	                				}
	                				else {
	                					
	                					var casual = Math.round(10*Math.random());
	                					if (casual > 7) {
	                						
	                						console.log("sono qui");
	                						res.end("Il nome dell'esercizio non esiste oppure il credito nel metodo di pagamento scelto non è sufficiente");//il saldo nella carta non è sufficiente
	                					}
	                					else {
	                						
	                						console.log("sono qui");
	                						res.end("I dati sono corretti");//tutti i dati sono corretti
	                					}
	                				}
	                			}
	                			//
	                		}
	                		if (trovato == false) {
	                			console.log("else2");
		                		res.end("Il nome dell'esercizio non esiste oppure il credito nel metodo di pagamento scelto non è sufficiente");
	                		}
	                		
	                	}
	                	else {
        	        		throw error;
        	        	}
	                });
			
			
		},
		//carica i dati del pagamento nel dbms 
	    carica_dati : function(req,res,mail,nome_e,importo,numcarta,periodico,data_f,cadenza) {
	    	var casual = Math.round(999999999999999*Math.random());
	    	var cod_pagamento = nome_e+casual+"";
	    	var d = new Date();
	    	var mese = (d.getMonth() + 1);
	    	var data_oggi = d.getDate()+"/"+mese+"/"+d.getFullYear();
	    	res.header('Access-Control-Allow-Origin', '*');
	        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	        res.writeHead(200,{"Content-Type":"text/plain"});
	        var sql = "INSERT INTO Paga  (Cod_pag,Nome_e,Email,importo,data,pagamento_periodico,cadenza_pagamento,data_fine,num_carta_usata) VALUES ('" + cod_pagamento + "','" +nome_e+"','"+mail+"','"+importo+"','"+data_oggi+"','"+periodico+"','"+cadenza+"','"+data_f+"','"+numcarta+"');";
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
	                		
	                		 var  que = "UPDATE Conto SET Saldo = Saldo - "+importo+"  WHERE Email = '"+mail+"';";
                             var con5 = d1.createConnection({
                                host: "localhost",
                                port: "3306",
                                        user: "utente_progetto",
                                        password: "progetto",
                                database: "Paypal"
                              });
                         con5.connect();
                         con5.query(que, function (error, results, fields) {
                        	 if (!error) {
                        		 res.end("La transazione è andata a buon fine");//dati caricati correttamente 
                        	 }
                        	 
                         });
	                		
	                	}
	                	else {
	                		throw error;
	                	}
	                });
	    	
	    }
		
		
}
exports.PagaEsercizioModel = PagaEsercizioModel;
