//chiama la funzione principale cha attiva il caso d'uso
function versa () {
        var oggetto = new VersaController();
	oggetto.versa();
}
//chiama il metodo avanti1
function avanti1() {
       var oggetto = new VersaController();
	oggetto.avanti1();
}
//chiama il metodo avanti2
function avanti2() {
       var oggetto = new VersaController();
	oggetto.avanti2();
}
class VersaController {
	//funzione principale
	versa() {
		var og = new VersaView();
		var mail = og.get_mail();
		$.ajax({
		      type: "GET",
		      url: "http://localhost:5000/carte_agganciate",
		      data: { email : mail},
		      dataType: "json",
		      beforeSend: function(xhr) {
		    xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
		     },
		      success: function(msg)
		      { 
		    	  if (msg.length  == 0) {
		    		  og.mostra_messaggio("Non risulta nessuna carta agganciata a questo account");
		    	  }
		    	  else {
		    		og.mostra_inserimento(msg);
		    	  }
		    	  
		      },
		      error: function()
		      {
		        alert("Chiamata fallita, si prega di riprovare...");
		      }
		    });		
	}
	//torna alla home
	avanti1() {
		while ( document.getElementById("contenuto").firstChild != null) {
			document.getElementById("contenuto").removeChild(document.getElementById("contenuto").firstChild);
		}
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
	//manda il messaggio di errore oppure effettua il versamento
	avanti2() {
               var og = new VersaView();
		var casual = Math.round(10*Math.random());
		     var mail = og.get_mail();
                       if (casual > 8) {
			og.mostra_messaggio("La transazione non è andata a bun fine per mancanza fondi");
			$.ajax({
			type: "GET",
		      url: "http://localhost:5000/manda_comunicato",
		      data: { mail : mail, testo : "La informiamo che ha appena tentato di effettuare un versamento sul suo conto , il quale non è andato a buon fine per mancanza di fordi"},
		      dataType: "text",
		      beforeSend: function(xhr) {
		    xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
		     },
		      success: function(msg)
		      { 
		    	  if (msg == "mandato correttamente") {
		    		  console.log("mandato correttamente");
		    	  }
		      },
		      error: function()
		      {
		        alert("Chiamata fallita, si prega di riprovare...");
		      }
		    });		
		}else {
			//qua in teoria dovrebbe collegarsi alla banca ed effettuare la transazione reale
			var cartascelta = versamento.carte.value;
			var importoscelto = versamento.importo.value;
			
			$.ajax({
				type: "GET",
			      url: "http://localhost:5000/versamento",
			      data: { mail : mail, cartascelta : cartascelta ,importoscelto : importoscelto },
			      dataType: "text",
			      beforeSend: function(xhr) {
			    xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
			     },
			      success: function(msg)
			      { 
			    	 og.mostra_messaggio(msg);
			    	 $.ajax({
			 			type: "GET",
			 		      url: "http://localhost:5000/manda_comunicato",
			 		      data: { mail : mail, testo : "La informiamo che il versamento è stato effettuato con successo"},
			 		      dataType: "text",
			 		      beforeSend: function(xhr) {
			 		    xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
			 		     },
			 		      success: function(msg)
			 		      { 
			 		    	  if (msg == "mandato correttamente") {
			 		    		 console.log("mandato correttamente");
			 		    	  }
			 		      },
			 		      error: function()
			 		      {
			 		        alert("Chiamata fallita, si prega di riprovare...");
			 		      }
			 		    });		
			    	 
			      },
			      error: function()
			      {
			        alert("Chiamata fallita, si prega di riprovare...");
			      }
			    });		
		}
	}
 }


class VersaView {
	//recupera la mail dalla pagina html
	get_mail() {
		var mailcom = document.getElementById("maillog").firstChild.nodeValue;
        console.log(mailcom);
        var og = mailcom.split(" ");
        var mail = og[2];
       console.log(mail);
        return mail;
		
	}
	//chiude il menu,rimuove gli elementi dal div contenuto,inserisce il form di inserimento dati
	mostra_inserimento (carte_agganciate) {
		mostramenu();
		while ( document.getElementById("contenuto").firstChild  != null) {
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
		var labimp = document.createElement("h2");
		var labcarta = document.createElement("h2");
		var inimp = document.createElement("input");
		 
		 
		var acapo = document.createElement("br");
		var t1 = document.createTextNode("Inserisci l'importo da versare");
		var t2 = document.createTextNode("Inserisci la carta da usare");
		var btn = document.createElement("input");
		var attbtn = document.createAttribute("type");
		attbtn.value = "button";
		btn.setAttributeNode(attbtn);
		var attbtn2 = document.createAttribute("value");
		attbtn2.value = "Invia";
		btn.setAttributeNode(attbtn2);
		var attbtn3 = document.createAttribute("onclick");
		attbtn3.value = "avanti2()";
		btn.setAttributeNode(attbtn3);	
		var attbtn4 = document.createAttribute("type");
		attbtn4.value = "text";
		inimp.setAttributeNode(attbtn4);
		var attbtn72 = document.createAttribute("name");
		attbtn72.value = "importo";
		inimp.setAttributeNode(attbtn72);
		var attbtn8 = document.createAttribute("name");
		attbtn8.value = "versamento";
		form.setAttributeNode(attbtn8);	
		var attbtn9 = document.createAttribute("id");
		attbtn9.value = "versamento";
		form.setAttributeNode(attbtn9);	
		labimp.appendChild(t1);
		labcarta.appendChild(t2);
		
		var h = carte_agganciate.length;
		
		form.appendChild(labimp);
		form.appendChild(acapo);
		form.appendChild(inimp);
		form.appendChild(acapo);
		form.appendChild(labcarta);
		//
		for (var i = 0; i < h ; ++i) {
			var carte = document.createElement("input");
			var lab = document.createElement("h5");
			
			var t1 = document.createTextNode("" + carte_agganciate[i].num_carta + "   " +carte_agganciate[i].tipo );
			lab.appendChild(t1);
			var attbtn20 = document.createAttribute("type");
			attbtn20.value = "radio";
			carte.setAttributeNode(attbtn20);	
			var attbtn21 = document.createAttribute("name");
			attbtn21.value = "carte";
			carte.setAttributeNode(attbtn21);	
	        var attbtn22 = document.createAttribute("value");
			attbtn22.value = carte_agganciate[i].num_carta;
			carte.setAttributeNode(attbtn22);	
			form.appendChild(lab);
			form.appendChild(carte);
			form.appendChild(acapo);
			
		}
		
		form.appendChild(btn);
		div.appendChild(form);
		document.getElementById("contenuto").appendChild(div);
		
	}
	//rimuive gli elementi dal div contenuto ,inserisce un messaggio e un pulsante per concludere il caso d'uso
	mostra_messaggio(testo) {
		while ( document.getElementById("contenuto").firstChild  != null) {
			document.getElementById("contenuto").removeChild(document.getElementById("contenuto").firstChild);
		}
		var div = document.createElement("div");
		var lab = document.createElement("h5");
		var lab2 = document.createElement("h5");
		var acapo = document.createElement("br");
		var t1 = document.createTextNode(testo);
		lab.appendChild(t1);
		var t2 = document.createTextNode("Inoltre le abbiamo mandato una comunicazione con le info dettagliate");
		lab2.appendChild(t2);
		var btn = document.createElement("input");
		var attbtn = document.createAttribute("type");
		attbtn.value = "button";
		btn.setAttributeNode(attbtn);
		var attbtn2 = document.createAttribute("value");
		attbtn2.value = "Invia";
		btn.setAttributeNode(attbtn2);
		
		var attbtn222 = document.createAttribute("align");
		attbtn222.value = "center";
		div.setAttributeNode(attbtn222);
		
		var attbtn3 = document.createAttribute("onclick");
		attbtn3.value = "avanti1()";
		btn.setAttributeNode(attbtn3);	
		div.appendChild(acapo);
		
		div.appendChild(lab);
		div.appendChild(acapo);
		div.appendChild(acapo);
		div.appendChild(lab2);
		div.appendChild(acapo);
		div.appendChild(btn);
		div.appendChild(acapo);
		div.appendChild(acapo);
		document.getElementById("contenuto").appendChild(div);
		document.getElementById("contenuto").appendChild(acapo);
		
		
	}
}
