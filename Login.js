//questa funzione chiama la funzione principale che inizia il caso d'uso 
function login() {
	var ogg = new Login_Controller();
	ogg.login();
}
//chiama il metodo avanti della classe Login_Controller
function avanti() {
	var ogg = new Login_Controller();
	ogg.avanti();
}

class Login_Controller {
    //funzione principale
	login() {
		var ogg = new Login_View();
		ogg.mostra_form();
	}
	//preleva email e password dal form effettua il controllo sintattico ,invia i dati al server, il quale nel 
	 //caso in cui i dati siano esistenti nel sistema e validi restituisce il codice html 
	 //per accedere alle funzionalita risevate del sistema
	avanti() {
		var email = campi_login.email.value;
		var pass = campi_login.pass.value;
		var pathp = /[A-Za-z0-9][A-Za-z0-9][A-Za-z0-9][A-Za-z0-9][A-Za-z0-9]*/;
		var pathm = /[A-Za-z0-9\.-_]+@[A-Za-z0-9\.]+\.[A-Za-z0-9\.]+/;
        if (!((pathm.test(email))&&(pathp.test(pass)))){
       	alert("La mail o la password hanno un formato non valido");     
        
        }	
		else {

  $(document).ready(function() {
    $.ajax({
      type: "POST",
      url: "http://localhost:5000/login",
      data: "email=" + email + "&pass=" + pass,
      dataType: "html",
      beforeSend: function(xhr) {
    xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
     },
      success: function(msg)
      { 
        var path = "error";
       if (path != (""+ msg)) {
       document.write(msg);
      document.close();
      }
      else {
    	  if (document.getElementById("error") == null) {
    		  var a = document.createElement("h4");
    		   var att = document.createAttribute("id");
    		   att.value= "error";
    		   a.setAttributeNode(att);
    		var at  = document.createTextNode("La password o la mail inerita non è corretta");    
    		  a.appendChild(at); 
    		      document.getElementById("contenuto").appendChild(a);  
    	  }
  

      }
      },
      error: function()
      {
        alert("Chiamata fallita, si prega di riprovare...");
      }
    });
});

		}
	}
	
	
}
class Login_View { 
	 //chiude il menu ,rimuove tutti gli elementi dal div contenuto e inserisce i campi di testo necessari ad inserire
	//email e password
	mostra_form(){
		mostramenu();
		var contenuto = document.getElementById("contenuto");
		while ( contenuto.firstChild != null) {
			contenuto.removeChild(contenuto.firstChild);
		}
		var div = document.createElement("div");
		var attdiv = document.createAttribute("align");
		attdiv.value = "center";
		div.setAttributeNode(attdiv);
		var attdiv1 = document.createAttribute("width");
		attdiv1.value = "auto";
		div.setAttributeNode(attdiv1);
		var attdiv2 = document.createAttribute("height");
		attdiv2.value = "auto";
		div.setAttributeNode(attdiv2);
		
		var form = document.createElement("form");
               var messaggio = document.createElement("div");
		var labmail = document.createElement("h2");
		var labpass = document.createElement("h2");
		var inmail = document.createElement("input");
		var inpass = document.createElement("input");
		var spass = document.createElement("input");
		var acapo = document.createElement("br");
		var btn = document.createElement("input");
		var t1 = document.createTextNode("Inserisci la mail");
		labmail.appendChild(t1);
                var attn0 = document.createAttribute("id");
               attn0.value = "messaggio";
               messaggio.setAttributeNode(attn0);
		var attbtn = document.createAttribute("type");
		attbtn.value = "button";
		btn.setAttributeNode(attbtn);
		
		var attbtno = document.createAttribute("type");
		attbtno.value = "checkbox";
		spass.setAttributeNode(attbtno);
		
		var attbtno1 = document.createAttribute("onclick");
		attbtno1.value = "mostrapassl()";
		spass.setAttributeNode(attbtno1);
		var attbtno2 = document.createAttribute("value");
		attbtno2.value = "mostra";
		spass.setAttributeNode(attbtno2);
		
		var attbtn2 = document.createAttribute("value");
		attbtn2.value = "Invia";
		btn.setAttributeNode(attbtn2);
		var attbtn3 = document.createAttribute("onclick");
		attbtn3.value = "avanti()";
		btn.setAttributeNode(attbtn3);	
		var t2 = document.createTextNode("Inserisci la password");
		labpass.appendChild(t2);
		var attbtn4 = document.createAttribute("type");
		attbtn4.value = "text";
		inmail.setAttributeNode(attbtn4);	
		var attbtn5 = document.createAttribute("name");
		attbtn5.value = "email";
		inmail.setAttributeNode(attbtn5);	
		var attbtn6 = document.createAttribute("type");
		attbtn6.value = "password";
		inpass.setAttributeNode(attbtn6);	
		
		var attbtnkk5 = document.createAttribute("value");
		attbtnkk5.value = "inserisci";
		inmail.setAttributeNode(attbtnkk5);	
		
		var attbtnkk6 = document.createAttribute("value");
		attbtnkk6.value = "";
		inpass.setAttributeNode(attbtnkk6);	
		
		var attbtn7 = document.createAttribute("name");
		attbtn7.value = "pass";
		inpass.setAttributeNode(attbtn7);
		var attbtno7 = document.createAttribute("id");
		attbtno7.value = "pass";
		inpass.setAttributeNode(attbtno7);
		
		var attbtn8 = document.createAttribute("name");
		attbtn8.value = "campi_login";
		form.setAttributeNode(attbtn8);	
		var attbtn9 = document.createAttribute("id");
		attbtn9.value = "campi_login";
		form.setAttributeNode(attbtn9);	
		form.appendChild(labmail);
		form.appendChild(acapo);
		form.appendChild(inmail);
		form.appendChild(acapo);
		form.appendChild(labpass);
		form.appendChild(acapo);
		form.appendChild(inpass);
		form.appendChild(acapo);
		form.appendChild(spass);
		form.appendChild(acapo);
		form.appendChild(btn);
		div.appendChild(form);
		contenuto.appendChild(div);
            contenuto.appendChild(messaggio);		
	}
	
}
function mostrapassl() {
	       //serve solo per nascondere la password durante l'inserimento
		  var x = document.getElementById("pass");
		  if (x.type === "password") {
		    x.type = "text";
		  } else {
		    x.type = "password";
		  }
		
}
