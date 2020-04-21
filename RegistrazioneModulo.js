
var cors = require('cors');
var a = require('mysql');
var b = require('mysql');
const legit = require('legit');


var Registrazione_model =  {
		//prende in input
		//gli oggetti per gestire la richista
		//dati di registrazione
		// flusso eventi
		//carica i dati di registrazione nel dbms
		//crea un conto 
		// se tutto va bene fa il login
       risp : "",
		carica_dati: function(req,res,emailins,nome,cognome,datan,luogon,numeroc,canalep,password) {
                    /*(async () => {
                        try {
                        const response = await legit(emailins);
                     Registrazione_model.risp = response.isValid;
                    response.isValid ? console.log('valid') : console.log('invalid');
                    } catch (e) {
                    Registrazione_model.risp = false;
                        }
                        })();
    console.log(Registrazione_model.risp);*/
        Registrazione_model.risp = true;
        if (Registrazione_model.risp == false) {
            Registrazione_model.risp = "";
            res.end("email inserita non esistente"); 
        }
        if (Registrazione_model.risp == true) {
             Registrazione_model.risp = "";
		var saldo = 0;
		var rand = Math.round(9999999*Math.random());
		var cod_conto = ""+nome+"_"+cognome+rand;
        console.log(emailins+"    "+cod_conto);
		   var sql1 = "INSERT INTO Conto  (Cod_conto, Saldo ,Email) VALUES ('" + cod_conto + "'," +saldo+",'"+emailins+"');";
	       var sql2 = "INSERT INTO Utenti  (Email, Nome ,Cognome,Numero_cel,Data_nascita,Luogo_nascita,Password,Canale_preferito) VALUES ('" + emailins + "','" +nome+"','"+cognome+"','"+numeroc+"','"+datan+"','"+luogon+"','"+password+"','"+canalep+"');";
	       
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
	         console.log("email gia registrata nel sistema");
	         res.end("email gia registrata nel sistema"); 
	       } else {   	 
	 console.log("Record inserito correttamente");
	         
	 var con1 = a.createConnection({
            host: "localhost",
                                port: "3306",
                                        user: "utente_progetto",
                                        password: "progetto",
                                database: "Paypal"
          });
con1.connect();
con1.query(sql1, function (error, results, fields) {
            if (error) {
            	console.log("Il conto non è stato creato");
            }
            else {console.log("Conto creato correttamente");}
            });
	       con1.end();
	
	         
	         res.writeHead(200,{"Content-Type":"text/html"});
	         res.end("<div id = 'schermata_successo'>"+
	        //
	       " <h1>Registrazione avvenuta con successo</h1>"+
	        "<input type='button' value='Avanti' onclick = 'avanti()'>"+
	        "<script type = 'text/javascript'>"+
	       "function avanti() {"+
	     "$(document).ready(function() {"+
	    "$.ajax({"+
	     " type: 'POST',"+
	      "url: 'http://localhost:5000/login',"+
	      "data: 'email='+'" + emailins + "'+'&pass='+ '"+ password +"',"+
	      "dataType: 'html',"+
	      "beforeSend: function(xhr) {"+
	    "xhr.setRequestHeader('Access-Control-Allow-Origin', '*');"+
	     "},"+
	      "success: function(msg)"+
	      "{ "+
	       " var path = 'error';"+
	       "if (path != (''+ msg)) {"+
	       "document.write(msg);"+
	      "document.close();"+
	      "}"+
	      "else {"+
	   "var a = document.createElement('h4');"+
	"var at  = document.createTextNode('La password o la mail inerita non è corretta'); "+   
	 " a.appendChild(at); "+
	  "    document.getElementById('contenuto').appendChild(a);"+

	   "   }"+
	    "  },"+
	     " error: function()"+
	      "{"+
	       " alert('Chiamata fallita, si prega di riprovare...');"+
	      "}"+
	   " });"+
	"});"+
	"}"+
	 "       </script>"+
	"</div>");
	//
	         }
		});
	   	con2.end(); 
       }
	}
}

exports.Registrazione_model = Registrazione_model;
