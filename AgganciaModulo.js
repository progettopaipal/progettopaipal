
var b = require("mysql");
var a = require("mysql");
var Aggancia_Model = {
		//questa funzione prende in input la mail dell'utente,i dati della carta e gli oggetti req e res necessari a gestire 
		//la richiesta;prima di caricare i dati nel dbms chiede al dbms il codice del conto dell'utente usando la mail,
		//dopo carica i dati nel dbms e infine se tutto è andato bene restituisce un pezzo di codice html necessario 
		//per andare avanti
        carica_dati: function (req,res,mail,numcarta,scadenza,tipo) {
        	 res.header('Access-Control-Allow-Origin', '*');
             res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
                   var  cod_conto;
 console.log(mail);
             var sql = "Select Cod_conto as P from Conto where Email = '"+mail+"';";
                      var con2 = b.createConnection({
                                        host: "localhost",
                                port: "3306",
                                        user: "utente_progetto",
                                        password: "progetto",
                                database: "Paypal"
                                      });
                     con2.connect();
                     con2.query(sql, function (error, results, fields) {
                       if (error){
                      console.log("Errore");
                      res.end();       
                          } else {          
                    console.log("Il dato è stato prelevato con successo");
                    cod_conto = results[0].P;
                      console.log(""+cod_conto);
                       var sql1 = "INSERT INTO Metodi_pagamento  (Num_carta, Tipo_carta ,Scadenza,Cod_conto) VALUES ('" + numcarta + "','" +tipo+"','"+scadenza+"','"+cod_conto+"');";
                  
                     var con3 = a.createConnection({
                                        host: "localhost",
                                port: "3306",
                                        user: "utente_progetto",
                                        password: "progetto",
                                database: "Paypal"
                                     });
                    con3.connect();
                    
                    con3.query(sql1, function (error, results, fields) {
                      if (error){
                     console.log("errore");
                     throw error;
                   } else {          
             console.log("Record inserito correttamente");
                res.writeHead(200,{"Content-Type":"text/html"});

                res.end("<div align = 'center' id = 'aggancia_suc'> <h1>La carta è stata agganciata correttamente</h1>"+                   
                		"<input type = 'button' onclick = 'avanti22()' value = 'Avanti'></input> " +
                		"<script type = 'text/javascript'>" +
                		"function avanti22() {"+
                		"var a = document.getElementById('contenuto');" +
                		"a.removeChild(a.firstChild);" +
                		"mostra_home();"+
                		"}"+
                		"</script></div>");
                   }});
                   } });
                   
        }
}
exports.Aggancia_Model = Aggancia_Model;
