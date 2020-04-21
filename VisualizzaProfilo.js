//chiama la funzione principale
function visualizza_profilo() {
	var og = new VisualizzaProfiloController();
	og.visualizza_profilo();
}
class VisualizzaProfiloController {
	//funzione principale
	visualizza_profilo() {
		var ogview = new VisualizzaProfiloView();
		var mail = ogview.get_mail();
		$.ajax({
		      type: "GET",
		      url: "http://localhost:5000/visualizza_profilo",
		      data: { email : mail},
		      dataType: "html",
		      beforeSend: function(xhr) {
		    xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
		     },
		      success: function(msg)
		      { 
		    	  ogview.mostra_dati(msg);
		      },
		      error: function()
		      {
		        alert("Chiamata fallita, si prega di riprovare...");
		      }
		    });		
	}
}
class VisualizzaProfiloView {
	//recupera la mail
	get_mail() {
	var mailcom = document.getElementById("maillog").firstChild.nodeValue;
        console.log(mailcom);
	var og = mailcom.split(" ");
	var mail = og[2];
       console.log(mail);
	return mail;
	}
	//chiude il menu ,rimuove gli elementi dal div contenuto e inserisce i dati del profilo
	mostra_dati(msg) {
               mostramenu();
       while (document.getElementById("contenuto").firstChild != null ) {
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
        console.log(msg);
        $("#contenuto").append(div);
        $("#box").append(msg);
        
		//prende tutti i dati contenuti nell'oggetto dati_registrazione e li visualizza all'utente
	}
}
