//questa funziona chiama la funziona principale che inizia il cao d'uso
function paga() {
	var ogg = new PagaEsercizioController();
	ogg.paga_esercizio();
}
// questa funzione chiama la funzione avanti della classe PagaEesercizioController
function pavanti() {
	var ogg = new PagaEsercizioController();
	ogg.avanti();
}
//questa funzione chiama la funzione avanti2 della classe PagaEesercizioController
function pavanti2() {
	var ogg = new PagaEsercizioController();
	ogg.avanti2();
}
class PagaEsercizioController {
	//funzione principale
	paga_esercizio() {
		var og = new PagaEsercizioView();
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
	//flusso eventi
	//preleva i dati inseriti dal form
	//1)se l'utente sceglie di non attivare un pagamento periodico  invia i dati al server 
	//prima per la verifica e poi per il caricamento
	//2)se l'utente sceglie di attivare un pagamento periodico chiama la funzione della view che 
	//mostra i campi di testo per inserire i dati del pagamento periodico 
	//3)se l'utente ha gia inserito i dati del pagamento periodico il sistema invia i dati al server prima 
	//per la verifica e poi per il caricamento 
	
	
	avanti () {
		var og = new PagaEsercizioView();
		var mail = og.get_mail();
		var nome_e = pagaesercizio.nome_e.value;
		var importo = pagaesercizio.importo.value;
		var numcarta = pagaesercizio.carte.value;
		var periodico = pagaesercizio.periodico.value;
		if (periodico == "no" ){
			$.ajax({
			      type: "GET",
			      url: "http://localhost:5000/verifica_dati_pagamento",
			      data: {mail : mail, nome_e : nome_e,importo : importo,numcarta : numcarta,periodico : periodico},
			      dataType: "text",
			      beforeSend: function(xhr) {
			    xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
			     },
			      success: function(msg)
			      { 
			    	  if (msg == "I dati sono corretti") {
			    		  $.ajax({
			    		      type: "GET",
			    		      url: "http://localhost:5000/carica_dati_pagamento",
			    		      data: {mail : mail, nome_e : nome_e,importo : importo ,numcarta : numcarta,periodico : periodico},
			    		      dataType: "text",
			    		      beforeSend: function(xhr) {
			    		    xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
			    		     },
			    		      success: function(msg)
			    		      { 
			    		    	var oggetto = new PagaEsercizioView();
			    		    	oggetto.mostra_messaggio(msg);
			    		    	  
			    		      },
			    		      error: function()
			    		      {
			    		        alert("Chiamata fallita, si prega di riprovare...");
			    		      }
			    		    });		
			    	  }
			    	  if (msg == "Il nome dell'esercizio non esiste oppure il credito nel metodo di pagamento scelto non è sufficiente"){
			    		  var oggetto = new PagaEsercizioView();
		    		    	oggetto.mostra_messaggio(msg);
			    	  }
			    	  
			      },
			      error: function()
			      {
			        alert("Chiamata fallita, si prega di riprovare...");
			      }
			    });		

		}
		if ((periodico == "si")&&(pagaesercizio.data_f != null )) {
			var data_f = pagaesercizio.data_f.value;
			var cadenza = pagaesercizio.cadenza.value;
				$.ajax({
				      type: "GET",
				      url: "http://localhost:5000/verifica_dati_pagamento",
				      data: { mail : mail ,nome_e : nome_e,importo : importo ,numcarta : numcarta,periodico : periodico,data_f : data_f,cadenza : cadenza},
				      dataType: "text",
				      beforeSend: function(xhr) {
				    xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
				     },
				      success: function(msg)
				      { 
				    	  if (msg == "I dati sono corretti") {
				    		  $.ajax({
				    		      type: "GET",
				    		      url: "http://localhost:5000/carica_dati_pagamento",
				    		      data: {mail: mail, nome_e : nome_e,importo : importo ,numcarta : numcarta,periodico : periodico,data_f : data_f,cadenza : cadenza},
				    		      dataType: "text",
				    		      beforeSend: function(xhr) {
				    		    xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
				    		     },
				    		      success: function(msg)
				    		      { 
				    		    	var oggetto = new PagaEsercizioView();
				    		    	oggetto.mostra_messaggio("La transazione è andata a buon fine");
				    		    	  
				    		      },
				    		      error: function()
				    		      {
				    		        alert("Chiamata fallita, si prega di riprovare2");
				    		      }
				    		    });		
				    	  }
				    	  if (msg == "Il nome dell'esercizio non esiste oppure il credito nel metodo di pagamento scelto non è sufficiente"){
				    		  var oggetto = new PagaEsercizioView();
			    		    	oggetto.mostra_messaggio(msg);
				    	  }
				    	  
				      },
				      error: function()
				      {
				        alert("Chiamata fallita, si prega di riprovare1");
				      }
				    });		
			
			}
		if ((periodico == "si")&&(pagaesercizio.data_f == null)) {
			if (numcarta == "0000000000000000") {
				alert("I pagamenti periodici si possono attivare solamente se si paga con carta");
			} else {
			var ogget = new PagaEsercizioView();
			ogget.mostra_bottoni_ulteriori();
			}
		
		}
		

		
	}
	//conclude il caso d'uso inviando una comunicazione all'utente tramite il canale scelto 
	//per informarlo che l'operazione è riuscita oppure no 
	//alla fine mostra la home
	avanti2() {
		var a = document.getElementById("messaggio").firstChild.nodeValue;
		var testo = "";
		if (a == "La transazione è andata a buon fine") {
			testo = "Gentile cliente la informiamo che la transazione che ha appena effettuato sul nostro sito è andata a buon fine";
		}if (a == "Il nome dell'esercizio non esiste oppure il credito nel metodo di pagamento scelto non è sufficiente") {
			testo = "Gentile cliente ha appena provato ad effettuare una transazione che pultroppo non è andata a buon fineper una delle seguenti ragioni:mancanza soldi,dati errati";
		} 
		var ogg = new PagaEsercizioView();
		var mail = ogg.get_mail();
		 $.ajax({
		      type: "GET",
		      url: "http://localhost:5000/manda_comunicato",
		      data: { mail : mail ,testo : testo},
		      dataType: "text",
		      beforeSend: function(xhr) {
		    xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
		     },
		      success: function(msg)
		      { 
		    	console.log("corretto");
		    	  
		      },
		      error: function()
		      {
		        alert("Chiamata fallita, si prega di riprovare...");
		      }
		    });	
		ogg.mostra_home();
		
	}	
}
class PagaEsercizioView {
	    // preleva dalla testa del sito la parola in posizione 2 del div di testo "loggato come mail"
	    get_mail () {
	    	var mailcom = document.getElementById("maillog").firstChild.nodeValue;
	        console.log(mailcom);
	        var og = mailcom.split(" ");
	        var mail = og[2];
	       console.log(mail);
	        return mail;
	    }
	    //chiude il menu ,rimuove tutti gli elementi dal div contenuto e inserisce il form 
	    //per l'inserimento dei dati dell'esercizio da pagare
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
			var labnome_e = document.createElement("h2");
			var labperiodico = document.createElement("h2")
			var labcarta = document.createElement("h2");
			var inimp = document.createElement("input");
			var innome_e = document.createElement("input");
			 
			 
			var acapo = document.createElement("br");
			
			var t1 = document.createTextNode("Inserisci l'importo da pagare");
			var t2 = document.createTextNode("Inserisci la carta da usare");
			var t3 = document.createTextNode("Inserisci il nome dell'esercizio commericiale da pagare");
			var t4 = document.createTextNode("Attivare pagamento periodico");
			labperiodico.appendChild(t4);
			var btn = document.createElement("input");
			var attbtn = document.createAttribute("type");
			attbtn.value = "button";
			btn.setAttributeNode(attbtn);
			var attbtn2 = document.createAttribute("value");
			attbtn2.value = "Invia";
			btn.setAttributeNode(attbtn2);
			var attbtn3 = document.createAttribute("onclick");
			attbtn3.value = "pavanti()";
			btn.setAttributeNode(attbtn3);	
			var attbtn4 = document.createAttribute("type");
			attbtn4.value = "text";
			inimp.setAttributeNode(attbtn4);
			
			var attbtn42 = document.createAttribute("type");
			attbtn42.value = "text";
			innome_e.setAttributeNode(attbtn42);
			
			var attbtn72 = document.createAttribute("name");
			attbtn72.value = "importo";
			inimp.setAttributeNode(attbtn72);
			
			var attbtn82 = document.createAttribute("name");
			attbtn82.value = "nome_e";
			innome_e.setAttributeNode(attbtn82);	
			
			var attbtn8 = document.createAttribute("name");
			attbtn8.value = "pagaesercizio";
			form.setAttributeNode(attbtn8);	
			var attbtn9 = document.createAttribute("id");
			attbtn9.value = "pagaesercizio";
			form.setAttributeNode(attbtn9);	
			labimp.appendChild(t1);
			labcarta.appendChild(t2);
			labnome_e.appendChild(t3);
			
			var h = carte_agganciate.length;
			form.appendChild(labnome_e);
			form.appendChild(acapo);
			form.appendChild(innome_e);
			form.appendChild(labimp);
			form.appendChild(acapo);
			form.appendChild(inimp);
			form.appendChild(acapo);
			form.appendChild(labcarta);
			//
			var carte = document.createElement("input");
			var labsa = document.createElement("h5");
			
			var t11 = document.createTextNode("Saldo corrente Paypal");
			labsa.appendChild(t11);
			var attbtn201 = document.createAttribute("type");
			attbtn201.value = "radio";
			carte.setAttributeNode(attbtn201);	
			var attbtn211 = document.createAttribute("name");
			attbtn211.value = "carte";
			carte.setAttributeNode(attbtn211);	
	        var attbtn22 = document.createAttribute("value");
			attbtn22.value = "0000000000000000";
			carte.setAttributeNode(attbtn22);	
			form.appendChild(labsa);
			form.appendChild(carte);
			form.appendChild(acapo);
			for (var i = 0; i < h ; ++i) {
				 carte = document.createElement("input");
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
			form.appendChild(labperiodico);
			var periodico = document.createElement("input");
			var labper = document.createElement("h5");
			var g1 = document.createTextNode("si");
			labper.appendChild(g1);
			var attbtn205 = document.createAttribute("type");
			attbtn205.value = "radio";
			periodico.setAttributeNode(attbtn205);	
			var attbtn215 = document.createAttribute("name");
			attbtn215.value = "periodico";
			periodico.setAttributeNode(attbtn215);	
	        var attbtn225 = document.createAttribute("value");
			attbtn225.value = "si";
			periodico.setAttributeNode(attbtn225);	
			form.appendChild(labper);
			form.appendChild(periodico);
			form.appendChild(acapo);
			
			 periodico = document.createElement("input");
			 labper = document.createElement("h5");
			var g2 = document.createTextNode("no");
			labper.appendChild(g2);
			var attbtn2055 = document.createAttribute("type");
			attbtn2055.value = "radio";
			periodico.setAttributeNode(attbtn2055);	
			var attbtn2155 = document.createAttribute("name");
			attbtn2155.value = "periodico";
			periodico.setAttributeNode(attbtn2155);	
			
			var attbtn21554 = document.createAttribute("id");
			attbtn21554.value = "per";
			periodico.setAttributeNode(attbtn21554);	
			
	        var attbtn2255 = document.createAttribute("value");
			attbtn2255.value = "no";
			periodico.setAttributeNode(attbtn2255);	
			form.appendChild(labper);
			form.appendChild(periodico);
			form.appendChild(acapo);
			
			form.appendChild(btn);
			div.appendChild(form);
			document.getElementById("contenuto").appendChild(div);
			
		
	}
		//aggiunge al div contenuto un messaggio di riuscita o no e il pulsante per concludere il caso d'uso
		mostra_messaggio(testo) {
			var contenuto = document.getElementById("contenuto");
			while ( contenuto.firstChild != null) {
				contenuto.removeChild(contenuto.firstChild);
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
			
			var attbtn11 = document.createAttribute("id");
			attbtn11.value = "messaggio";
			lab.setAttributeNode(attbtn11);
			
			var attbtn2 = document.createAttribute("value");
			attbtn2.value = "Invia";
			btn.setAttributeNode(attbtn2);
			
			var attbtn222 = document.createAttribute("align");
			attbtn222.value = "center";
			div.setAttributeNode(attbtn222);
			
			
			var attbtn3 = document.createAttribute("onclick");
			attbtn3.value = "pavanti2()";
			btn.setAttributeNode(attbtn3);	
			div.appendChild(lab);
			div.appendChild(acapo);
			div.appendChild(lab2);
			div.appendChild(acapo);
			div.appendChild(btn);
			contenuto.appendChild(div);
			contenuto.appendChild(acapo);
		}
		//mostra i campi per inserire i dati del pagamento periodico
	mostra_bottoni_ulteriori() {
		var form = document.getElementById("pagaesercizio"); 
		var data_f = document.createElement("input");
		var cadenza = document.createElement("input");
		var labdata = document.createElement("h2");
		var labcad = document.createElement("h2");
		var t1 = document.createTextNode("Inserire la data di fine pagamento periodico");
		var t2 = document.createTextNode("Inserire la cadenza");
		labdata.appendChild(t1);
		labcad.appendChild(t2);
		var att1 = document.createAttribute("type");
		att1.value = "text";
		cadenza.setAttributeNode(att1);
		var att1111 = document.createAttribute("type");
		att1111.value = "text";
		data_f.setAttributeNode(att1111);
		var att2 = document.createAttribute("name");
		att2.value = "cadenza";
		cadenza.setAttributeNode(att2);
		var att3 = document.createAttribute("name");
		att3.value = "data_f";
		data_f.setAttributeNode(att3);
		
		form.insertBefore(labdata,document.getElementById("per"));
		form.insertBefore(data_f,document.getElementById("per"));
		form.insertBefore(labcad,document.getElementById("per"));
		form.insertBefore(cadenza,document.getElementById("per"));
	}
	//aggiunge al div contenuto le informazioni della home
	mostra_home() {
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
	
}
