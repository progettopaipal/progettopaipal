
var b = require('mysql');
var Login_model =  {
		//prende in input : 
		//gli oggetti per gestire la richiesta ,mail ,passord
		//eventi:
		//chiede la password associata alla mail che gli viene passata e controlla che questa password sia uguale a
		//qualla passata in input,se è giusta restituisce il codice html necessario ad accedere alle funzionalita 
		//riservate
	verifica: function(req,res,email,password) {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
              var  risultato;
       	var sql = "Select Password as P from Utenti where Email = '"+email+"';";
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
       	       if (results[0] == undefined) {
       	    	 res.end("error");
       	       }
       	       else  {
       	       risultato = results[0].P;
                         if (password == risultato) {
 res.writeHead(200,{"Content-Type":"text/html"});                                 
 res.end("<!DOCTYPE html>"+

       "<html>"+
       "<head>"+
       "<meta charset='UTF-8'/>"+
       "<meta http-equiv='Content-Type' content='text/html;charset=utf-8'></meta>"+
       "<title>Home di paypal</title>"+
       "<link href = 'http://localhost:5000/stile'  rel='stylesheet'  type = 'text/css'/>"+
      "<script src='http://code.jquery.com/jquery-1.6.4.min.js' type='text/javascript'></script>"+
  "<script type = 'text/javascript' src = 'http://localhost:5000/vis_prof'></script>"+
       "<script type = 'text/javascript' src = 'http://localhost:5000/agg'></script>"+
      "<script type = 'text/javascript' src = 'http://localhost:5000/vers'></script>"+
     "<script type = 'text/javascript' src = 'http://localhost:5000/pag_es'></script>"+     
       "</head>"+
       "<body>"+
       "<div id = 'conteiner'>"+
       "<div id = 'pagina'>"+
       "<div id = 'testa'>"+
       
       "<svg id  = 'linea' height = '0.625em' width = '100%'>"+
       "<line x1='0' y1='0.300em' x2='100%' y2='0.300em' style='stroke:blue;stroke-width:2' />"+
	   "</svg>" +
	   " <div id = 'pezzo' >"+
	   "<button class = 'altsx' onclick='mostramenu()'>Menu</button>"+
	   "<a href = 'javascript:mostra_principale()'>"+
	   "<svg id = 'logo' height = '9.375em' width = '9.375em'>"+
	   "<text x='0' y='3.5em' font-size = '2.5em' fill='blue'>Paypal</text>"+
	   "</svg>"+
	   "</a>"+
       
       "<div id = 'maillog' >Loggato come "+email+"</div>"+
       "</div> "+
       "</div>"+
       "<div id = 'contenuto'>"+
       
       
       
         "<svg  height = '3.125em' width = 'auto'>"+
		"<text x='0' y='1.0em' font-size = '2.5em' fill='blue'>Home del sito</text>" +
		 "</svg>"+
"<h3>Informazioni</h3>"+
"<p>Sul nostro sito puoi effettuare le seguenti operazioni:"+
"-Versamento di somme di senaro"+
"-Agganciare una carta di credito"+
"-Pagare attivita commerciali"+
"-Inviare denaro"+
"-Ricevere Denaro"+
"-Visualizzare il proprio profilo"+
"-Gestire  le richieste di denaro"+
"-Ricevere comunicazioni sul canale preferito scelto"+
"</p>"+
"<h3>Informazioni sul canale di comunicazione</h3>"+
"<p>In fase di registrazione vi verra chiesto di scegliere il vostro vale di comunicazione preferito tra:"+
"-Email"+
"-Telegram"+
"Tutte le comunicazioni verranno inoltrate in automatico nel canale scelto"+
"Nel caso in cui si sia scleto Telegram è necessario attivare tale canale di comunicazione aprendo l'app"+
"e scrivendo paipal nella barra di ricerca,aprite la chat che vi compare e scrivete login:tuaemail,tuapassword"+
"Da quel momento riceverete tutte le comunicazioni in quella chat." +
"</p>"+
       
       
       
       
       
       "</div>"+
       "</div>"+
       "<div id = 'menu'>"+
       "<div>"+
       "<button class = 'botmenu' onclick = 'mostra_principale()' id = 'tastohome'>Home</button><br></br>"+
       "<button  class = 'botmenu' onclick = 'mostrasottomenup()' id = 'gestprofilo'>Gestisci Profilo</button>"+
      
       "<button  class = 'botmenu' style = 'top : 8px;' onclick = 'mostrasottomenuc()' id = 'gestconto'>Gestisci Conto</button>"+
       
       "<button class = 'botmenu' style = 'top : 15px;'  onclick = 'mostrasottomenut()' id = 'gesttrans'>Transazioni</button>"+
      
       "<script src = 'http://localhost:5000/sottmenu' type = 'text/javascript'></script>"+
       "</div>"+
       "</div>"+
       "<div id = 'testata'>"+
       "</div>"+
       "</div>"+

       "</body>"+
       "</html>  ");
                              }
       	       }
       	               
       	               }
       	        });
       	               con2.end();
                             
		
		
	}
}
exports.Login_model = Login_model;
