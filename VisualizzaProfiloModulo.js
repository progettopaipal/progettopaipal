/**
 * 
 */
var b = require('mysql');
var Visualizza_profilo_model =  {
		//recupera tutti i dati del profilo e li restituisce tramite un pezzo di codice html
	get_dati_profilo : function (req,res,mail) {
        console.log(mail);
		res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
              var  risultato;
       	var sql = "SELECT * from Utenti JOIN Conto where (Utenti.Email = Conto.Email) and (Utenti.Email = '"+mail+"');";
       	         var con2 = b.createConnection({
       	                          host: "localhost",
                                port: "3306",
                                        user: "utente_progetto",
                                        password: "progetto",
                                database: "Paypal"
       	                         });
       	        con2.connect();
       	        con2.query(sql, function (error, results, fields) {
       	        	if (!error) {
                         var dati_profilo = {
                                nome: results[0].Nome,
                                cognome: results[0].Cognome,
                                datan: results[0].Data_nascita,
                                luogon: results[0].Luogo_nascita,
                                email: results[0].Email,
                                password: results[0].Password,
                                numeroc: results[0].Numero_cel,
                                canalep: results[0].Canale_preferito,
                                cod_conto: results[0].Cod_conto,
                                saldo: results[0].Saldo
                }
             res.writeHead(200,{"Content-Type":"text/html"});
             res.end("<div id = 'profilo'>" +
                        "Nome:" + dati_profilo.nome + "<br>"+
                        "Cognome:" + dati_profilo.cognome + "<br>"+
                        "Data di nascita:" + dati_profilo.datan +  "<br>"+
                        "Luogo di nascita:" + dati_profilo.luogon +  "<br>"+ 
                        "Email:" + dati_profilo.email +  "<br>"+
                        "Password:" + dati_profilo.password +  "<br>"+
                        "Numero di cellulare:" + dati_profilo.numeroc + "<br>"+
                        "Canale Preferito:" + dati_profilo.canalep +  "<br>"+ 
                        "Codice del conto associato al profilo:"+ dati_profilo.cod_conto + "<br>"+
                        "Saldo:"+ dati_profilo.saldo + 
                        "</div>");



       	        	}else {
       	        		consol.log("Errore");
       	        		throw error;
       	        	}
       	        	
       	        });
	}
	
	
}
exports.Visualizza_profilo_model = Visualizza_profilo_model;
