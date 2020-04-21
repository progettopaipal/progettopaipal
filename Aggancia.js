//questa funzione chiama il metodo principale che avvia il caso d'uso
function avanti() {
var ogg = new AgganciaController();
ogg.aggancia_carta();
}
//questa funzione chiama il metodo avanti della classe AgganciaController
function avanti11() {
var ogg = new AgganciaController();
ogg.avanti();
}
//inserisce all'interno del div contenuto le informazioni della home
function mostra_home(){
	var a =   "<svg  height = '3.125em' width = 'auto'>"+
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
"</p>";
	document.getElementById("contenuto").innerHTML = a;
}
class AgganciaController {
	//funzione principale
	aggancia_carta() {
		var ogg = new AgganciaView();
		ogg.mostra_inserimento();
	}
	/*questo metodo viene invocato quando l'utente finisce di inserire i dati della carta da agganciare e si occupa di 
	**prelevare i dati dal form ,effettuare il controllo di correttezza dei dati e inviare i dati al server
	*/
	avanti() {
		var numcarta = aggancio.num.value;
		var tipocarta = aggancio.tipo.value;
		var scadenza = aggancio.scad.value;
		var pathn = /[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]/;
		var pathd = /[0-9][0-9]\/[0-9][0-9]\/[0-9][0-9][0-9][0-9]/;
		var dataoggi = new Date();
		var arr = scadenza.split("/");
		var datains = new Date(arr[0],arr[1],arr[2]);
		var rins = datains.getTime();
		var roggi = dataoggi.getTime();
		if (!((pathn.test(numcarta))&&(pathd.test(scadenza)))) {
			alert("Il numero della carta inserita non è un valore numerico di sedici cifre oppure la data è errata,oppure la carta è gia scaduta");
		}else {
			var casual = Math.round(10*Math.random());
			if (casual < 5) {
				alert("Il sistema ha appena comunicato col sistema bancario e i dati della carta inseriti risultano non validi");
			}else {
				var a = new AgganciaView();
				var mail = a.get_mail();
                    console.log("ora          "+tipocarta+"               "+scadenza+"                   "+numcarta);
		    $.ajax({
                    type: "GET",
                    url: "http://localhost:5000/aggancia_carta",
                    data: { email : mail,  numcarta : numcarta  ,  scadenza :  scadenza, tipo: tipocarta },
                    dataType: "html",
                    beforeSend: function(xhr) {
                  xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
                   },
                    success: function(msg)
                    {   $(msg); 
                        a.mostra_successo(msg);
                    },
                    error: function()
                    { 
                      alert("Chiamata fallita, si prega di riprovare...");
                    }
                  });     
				
				
			}
			
		}
		
	}
}
class AgganciaView {
	//recupera dalla testa del sito la parola in posizione 2 del div di testo contenente "loggato come email"
	 get_mail() {
	        var mailcom = document.getElementById("maillog").firstChild.nodeValue;
	        console.log(mailcom);
	        var og = mailcom.split(" ");
	        var mail = og[2];
	       console.log(mail);
	        return mail;
	        }
   // questo metodo chiude il menu laterale ,rimuove tutti gli elementi dal div contenuto ,crea e appende nel div 
	 //contenuto il form per l'inserimento dei dati della carta da aggnaciare
	mostra_inserimento() {
                mostramenu();
                while ( document.getElementById("contenuto").firstChild  != null) {
                       $(document.getElementById("contenuto").firstChild);
                        document.getElementById("contenuto").removeChild(document.getElementById("contenuto").firstChild);
                }

                var div = document.createElement("div");
        		var attdiv = document.createAttribute("align");
        		attdiv.value = "center";
        		div.setAttributeNode(attdiv);
        		var attdivv = document.createAttribute("id");
        		attdivv.value = "box";
        		div.setAttributeNode(attdivv);
        		var attdiv1 = document.createAttribute("width");
        		attdiv1.value = "auto";
        		div.setAttributeNode(attdiv1);
        		var attdiv2 = document.createAttribute("height");
        		attdiv2.value = "auto";
        		div.setAttributeNode(attdiv2);
        		
		var form = document.createElement("form");
               var messaggio = document.createElement("div");
		var labnum = document.createElement("h2");
		var labscad = document.createElement("h2");
		var labtipo = document.createElement("h2");
		var intipo = document.createElement("input");
		var innum = document.createElement("input");
		var inscad = document.createElement("input");
		var acapo = document.createElement("br");
		var btn = document.createElement("input");
		var t1 = document.createTextNode("Inserisci il tipo di carta da agganciare");
		labtipo.appendChild(t1);
		var attbtn = document.createAttribute("type");
		attbtn.value = "button";
		btn.setAttributeNode(attbtn);
		var attbtn2 = document.createAttribute("value");
		attbtn2.value = "Invia";
		btn.setAttributeNode(attbtn2);
		var attbtn3 = document.createAttribute("onclick");
		attbtn3.value = "avanti11()";
		btn.setAttributeNode(attbtn3);	
		var t2 = document.createTextNode("Inserisci il numero della carta da agganciare");
		labnum.appendChild(t2);
		var t3 = document.createTextNode("Inserisci la scandenza della carta");
		labscad.appendChild(t3);
		var attbtn4 = document.createAttribute("type");
		attbtn4.value = "text";
		intipo.setAttributeNode(attbtn4);	
		var attbtn5 = document.createAttribute("name");
		attbtn5.value = "tipo";
		intipo.setAttributeNode(attbtn5);	
		var attbtn6 = document.createAttribute("type");
		attbtn6.value = "text";
		inscad.setAttributeNode(attbtn6);	
		var attbtn62 = document.createAttribute("type");
		attbtn62.value = "text";
		innum.setAttributeNode(attbtn62);	
		var attbtn7 = document.createAttribute("name");
		attbtn7.value = "num";
		innum.setAttributeNode(attbtn7);
		var attbtn72 = document.createAttribute("name");
		attbtn72.value = "scad";
		inscad.setAttributeNode(attbtn72);
		var attbtn8 = document.createAttribute("name");
		attbtn8.value = "aggancio";
		form.setAttributeNode(attbtn8);	
		var attbtn9 = document.createAttribute("id");
		attbtn9.value = "aggancio";
		form.setAttributeNode(attbtn9);	
		form.appendChild(labtipo);
		form.appendChild(acapo);
		form.appendChild(intipo);
		form.appendChild(acapo);
		form.appendChild(labnum);
		form.appendChild(acapo);
		form.appendChild(innum);
		form.appendChild(acapo);
		form.appendChild(labscad);
		form.appendChild(acapo);
		form.appendChild(inscad);
		form.appendChild(btn);
		div.appendChild(form);
		contenuto.appendChild(div);
    }
	//prende in ingresso il codice html restituito dal server e lo appende nel div contenuto dopo aver rimosso gli elementi 
	//presenti in esso
	mostra_successo(msg) {
		var contenuto = document.getElementById("contenuto");
		while ( contenuto.firstChild != null) {
			contenuto.removeChild(contenuto.firstChild);
		}
		$("#contenuto").append(msg);
		
	}
}
