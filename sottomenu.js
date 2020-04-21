/**
 * gestisce l'apertura e la chiusura dei menu e sottomenu 
 */
function mostra_principale () {
	var menu = document.getElementById('menu');
	var cont = menu.getAttribute('style');
	if (!(cont  == 'visibility : visible;')) {
		menu.setAttribute('style','visibility : visible;');
		var pagina = document.getElementById('pagina');
		pagina.setAttribute('style','width : 55%;');
	}else {
		if (document.getElementById('sgestprofilo1') != null) {
			mostrasottomenup();
		}
		if (document.getElementById('menconto') !=  null ) {
			mostrasottomenuc();
		}
		if (document.getElementById('mentrans') != null){
			mostrasottomenut();
		}
		menu.setAttribute('style','visibility : hidden;');
	       	var pagina = document.getElementById('pagina');
	       	pagina.setAttribute('style','width : 100%;');
	}
	var info =  "<svg  height = '3.125em' width = 'auto'>"+
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
        var a = document.getElementById("contenuto");
        a.innerHTML = info;
}
function mostramenu () {
	var menu = document.getElementById('menu');
	var cont = menu.getAttribute('style');
	if (!(cont  == 'visibility : visible;')) {
		menu.setAttribute('style','visibility : visible;');
		var pagina = document.getElementById('pagina');
		pagina.setAttribute('style','width : 55%;');
	}else {
		if (document.getElementById('sgestprofilo1') != null) {
			mostrasottomenup();
		}
		if (document.getElementById('menconto') !=  null ) {
			mostrasottomenuc();
		}
		if (document.getElementById('mentrans') != null){
			mostrasottomenut();
		}
		menu.setAttribute('style','visibility : hidden;');
	       	var pagina = document.getElementById('pagina');
	       	pagina.setAttribute('style','width : 100%;');
	}
}
function mostrasottomenup() {
	var menu = document.getElementById("menu");
	if (document.getElementById("sgestprofilo1") == null) {
		var sottomenu =     "<a href = 'javascript:visualizza_profilo()'>Visualizza Profilo</a><br>"+
	    "<a href = 'http://localhost:5000/home.html'>Logout</a><br>";
		var sottomenu1 = document.createElement("div");
		var att1 = document.createAttribute("id");
		att1.value = "sgestprofilo1";
		sottomenu1.setAttributeNode(att1);
		var att2 = document.createAttribute("class");
		att2.value = "sottomenu";
		sottomenu1.setAttributeNode(att2);
		sottomenu1.innerHTML = sottomenu;
		
		 var mentrans = document.getElementById("mentrans");
		    var conto =  document.getElementById("menconto");
		    if ((mentrans != null )||(conto != null )) {
		    	menu.removeChild(menu.lastChild);
		    }
		menu.appendChild(sottomenu1);
	}else {
		menu.removeChild(document.getElementById("sgestprofilo1"));
	}
	
	
}
function mostrasottomenuc() {
	var menu = document.getElementById("menu");
	if (document.getElementById("menconto") == null) {
		var sottomenu =  "<a href = 'javascript:avanti()'>Aggancia carta</a><br>"+
	    "<a href = 'javascript:versa()'>Versa su conto</a><br>"+
	    "<a href = 'Cronologia_movimenti.html'>Cronologia movimenti</a><br>";
		var sottomenu1 = document.createElement("div");
		var att1 = document.createAttribute("id");
		att1.value = "menconto";
		sottomenu1.setAttributeNode(att1);
		var att2 = document.createAttribute("class");
		att2.value = "sottomenu";
		sottomenu1.setAttributeNode(att2);
		sottomenu1.innerHTML = sottomenu;
		
		 var profilo = document.getElementById("sgestprofilo1");
		    var mentrans =  document.getElementById("mentrans");
		    if ((profilo != null )||(mentrans != null )) {
		    	menu.removeChild(menu.lastChild);
		    }
		menu.appendChild(sottomenu1);
	}else {
		menu.removeChild(document.getElementById("menconto"));
	}
	
	
}
function mostrasottomenut() {
	var menu = document.getElementById("menu");
	if (document.getElementById("mentrans") == null) {
		var sottomenu =    "<a href = 'Invia_denaro.html'>Invia denaro</a><br>"+
	    "<a href = 'Ricevi_denaro.html'>Ricevi denaro</a><br>"+
	    "<a href = 'javascript:paga()'>Paga esercizio commerciale</a><br>"+
	    "<a href = 'Richieste_denaro.html'>Richieste denaro</a><br>";
		var sottomenu1 = document.createElement("div");
		var att1 = document.createAttribute("id");
		att1.value = "mentrans";
		sottomenu1.setAttributeNode(att1);
		var att2 = document.createAttribute("class");
		att2.value = "sottomenu";
		sottomenu1.setAttributeNode(att2);
		sottomenu1.innerHTML = sottomenu;
		
	    var profilo = document.getElementById("sgestprofilo1");
	    var conto =  document.getElementById("menconto");
	    if ((profilo != null )||(conto != null )) {
	    	menu.removeChild(menu.lastChild);
	    }
		menu.appendChild(sottomenu1);
	}else {
		menu.removeChild(document.getElementById("mentrans"));
	}
	
	
}
