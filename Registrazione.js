//chiama la funzione avanti1
function avanti1 () {
	var ogg = new Registrazione_controller();
	ogg.avanti1();
}
//chiama la funzione principale
var cod = "";
function registrazione () {
	var ogg = new Registrazione_controller();
	ogg.registrazione();
}
function verifica() {
    var email_  = campi.email.value;
		 var nome_  = campi.nome.value;
		 var cognome_  = campi.cognome.value;
		 var numeroc_  = campi.numeroc.value;
		 var password1_  = campi.pass.value;
		 var password2_  = campi.pass2.value;
		 var datan_  = campi.datan.value;
		 var luogon_  = campi.luogon.value;
		 var canalep_ = campi.cpreferito.value;
         var pathp = /[A-Za-z0-9][A-Za-z0-9][A-Za-z0-9][A-Za-z0-9][A-Za-z0-9]*/;
		 var pathn = /[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]/;
		 var pathd = /[0-9][0-9]\/[0-9][0-9]\/[0-9][0-9][0-9][0-9]/;
		 var pathm = /[A-Za-z0-9\.-_]+@[A-Za-z0-9\.]+\.[A-Za-z0-9\.]+/;
    if (!((pathn.test(numeroc_))&&(pathm.test(email_))&&(pathd.test(datan_))&&(password1_ == password2_)&&(nome_ != "")&&(cognome_ !="")&&(numeroc_ != "")&&(pathp.test(password1_))&&(pathp.test(password2_))&&(datan_ != "")&&(luogon_ != "")&&(canalep_ != ""))){
        	alert("il numero di cellulare,la data o l'email sono stati inseriti correttamente" +
        			" non sono stati inseriti correttamente");     
         
         }		    
         else {
    var email  = campi.email;
		 var nome  = campi.nome;
		 var cognome  = campi.cognome;
		 var numeroc  = campi.numeroc;
		 var password1  = campi.pass;
		 var password2  = campi.pass2;
		 var datan  = campi.datan;
		 var luogon  = campi.luogon;
		 var canalep = campi.cpreferito;
        var bott = document.getElementById("but");
         
         var disabled = document.createAttribute("disabled");
         disabled.value = "disabled";
          var disabled2 = document.createAttribute("disabled");
         disabled2.value = "disabled";
          var disabled3 = document.createAttribute("disabled");
         disabled3.value = "disabled";
          var disabled4 = document.createAttribute("disabled");
         disabled4.value = "disabled";
          var disabled5 = document.createAttribute("disabled");
         disabled5.value = "disabled";
          var disabled6 = document.createAttribute("disabled");
         disabled6.value = "disabled";
         var disabled7 = document.createAttribute("disabled");
         disabled7.value = "disabled";
         var disabled8 = document.createAttribute("disabled");
         disabled8.value = "disabled";
         var disabled9 = document.createAttribute("disabled");
         disabled9.value = "disabled";
         
         email.setAttributeNode(disabled);
         nome.setAttributeNode(disabled2);
         cognome.setAttributeNode(disabled3);
         password1.setAttributeNode(disabled4);
         password2.setAttributeNode(disabled5);
         datan.setAttributeNode(disabled6);
         luogon.setAttributeNode(disabled7);
         numeroc.setAttributeNode(disabled8);
         bott.setAttributeNode(disabled9);
         
         var codice_v = Math.round(9999999*Math.random());
         cod = codice_v;
         var email_v = email.value;
         
         $.ajax({
		      type: "GET",
		      url: "http://localhost:5000/manda_mail",
		      data: { mail : email_v , codice : codice_v },
		      dataType: "text",
		      beforeSend: function(xhr) {
		    xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
		     },
		      success: function(msg)
		      { 
                  if ( msg == "mandato correttamente")  {
                      
                      var lab = document.createElement("h2");
                      var t1 = document.createTextNode("Inserisci il codice di verifica che ti abbiamo mandato a "+ email_v );
                      lab.appendChild(t1);
                      
                      var incod = document.createElement("input");
                      var but = document.createElement("input");
                      
                      var attbtn4 = document.createAttribute("type");
                      attbtn4.value = "text";
                      incod.setAttributeNode(attbtn4);	
                      var attbtn5 = document.createAttribute("name");
                      attbtn5.value = "codice";
                      incod.setAttributeNode(attbtn5);
                      var attbtno7 = document.createAttribute("id");
		              attbtno7.value = "codice";
                      incod.setAttributeNode(attbtno7);
                      var attbtnkkk5 = document.createAttribute("value");
                      attbtnkkk5.value = "";
                      incod.setAttributeNode(attbtnkkk5);
                      
                      var attbtn40 = document.createAttribute("type");
                      attbtn40.value = "button";
                      but.setAttributeNode(attbtn40);	
                      var attbtn50 = document.createAttribute("onclick");
                      attbtn50.value = "avanti1()";
                      but.setAttributeNode(attbtn50);
                      var attbtnkkk50 = document.createAttribute("value");
                      attbtnkkk50.value = "Invia";
                      but.setAttributeNode(attbtnkkk50);
                       var attbtno70 = document.createAttribute("id");
		              attbtno70.value = "but2";
                      but.setAttributeNode(attbtno70);
                      
                      var form = document.getElementById("campi");
                      
                      form.appendChild(lab);
                      form.appendChild(incod); 
                      form.appendChild(but); 
                      
                  }
		    	  
		    	  
		      },
		      error: function()
		      {
		        alert("Chiamata fallita, si prega di riprovare...");
		      }
		    });		
         }
}
class Registrazione_controller {
	//recupera i dati dal form ,effettua il controllo sintattico ,se i dati sono giusti carica i dati nel dms
	 avanti1() {
       var c = document.getElementById("codice").value;
       if (c != cod) {
           alert("codice errato");
           
       } else { 
 var email  = campi.email.value;
		 var nome  = campi.nome.value;
		 var cognome  = campi.cognome.value;
		 var numeroc  = campi.numeroc.value;
		 var password1  = campi.pass.value;
		 var password2  = campi.pass2.value;
		 var datan  = campi.datan.value;
		 var luogon  = campi.luogon.value;
		 var canalep = campi.cpreferito.value;
         var pathp = /[A-Za-z0-9][A-Za-z0-9][A-Za-z0-9][A-Za-z0-9][A-Za-z0-9]*/;
		 var pathn = /[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]/;
		 var pathd = /[0-9][0-9]\/[0-9][0-9]\/[0-9][0-9][0-9][0-9]/;
		 var pathm = /[A-Za-z0-9\.-_]+@[A-Za-z0-9\.]+\.[A-Za-z0-9\.]+/;
    if (!((pathn.test(numeroc))&&(pathm.test(email))&&(pathd.test(datan))&&(password1 == password2)&&(nome != "")&&(cognome !="")&&(numeroc != "")&&(pathp.test(password1))&&(pathp.test(password2))&&(datan != "")&&(luogon != "")&&(canalep != ""))){
        	alert("il numero di cellulare,la data o l'email sono stati inseriti correttamente" +
        			" non sono stati inseriti correttamente");     
         
         }		    
         else {
        	 //carica i dati  nel db
        	  $(document).ready(function() {
    $.ajax({
      type: "POST",
      url: "http://localhost:5000/registrazione",
      data: "email=" + email + "&pass=" + password1 + "&nome="+nome+"&cognome="+cognome+"&luogon="+luogon+"&datan="+datan+"&numeroc="+numeroc+"&cpreferito="+canalep,
      dataType: "html",
      beforeSend: function(xhr) {
    xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
     },
      success: function(msg)
      { 
        var path = "email gia registrata nel sistema";
         var path2 = "email inserita non esistente";
         if (msg == path2 ) {
       alert(path2);
        }
        if (msg == path) {
       alert(path);
        }
        if ((msg != path) && (msg != path2)){
       var a = document.getElementById("contenuto");
       a.removeChild(a.firstChild);
       console.log(msg);
       $("#contenuto").prepend(""+msg);
        }
      },
      error: function()
      {
        alert("Chiamata fallita, si prega di riprovare...");
      }
    });
});

        	 
		    		
		} } }
	 //funzione principale
	 registrazione() {
		    var ogg = new Registrazione_view();
			ogg.mostra_form();
		}
}

class Registrazione_view {
	//chiude il menu laterale,rimuove gli elementi dal contenuto ,mostra il form di registrazione
	mostra_form() { 
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
		
        var labmail = document.createElement("h2");
		var labpass = document.createElement("h2");
		var labpass2 = document.createElement("h2");
        var labnome = document.createElement("h2");
        var labcognome = document.createElement("h2");
        var labluogo_n = document.createElement("h2");
        var labdata_n = document.createElement("h2");
        var labnumero_c = document.createElement("h2");
        var labcanalep = document.createElement("h2"); 
		
        var inmail = document.createElement("input");
		var inpass = document.createElement("input");
		var spass = document.createElement("input");
		var inpass2 = document.createElement("input");
        var innome = document.createElement("input");
		var incognome = document.createElement("input");
        var inluogo_n = document.createElement("input");
        var indata_n = document.createElement("input");
        var innumero_c = document.createElement("input");
        var incanalepw = document.createElement("input");
        var incanalepm = document.createElement("input");

        var acapo = document.createElement("br");
		var btn = document.createElement("input");
		var attbtno = document.createAttribute("type");
		attbtno.value = "checkbox";
		spass.setAttributeNode(attbtno);
		
		var attbtno1 = document.createAttribute("onclick");
		attbtno1.value = "mostrapassr()";
		spass.setAttributeNode(attbtno1);
		var attbtno2 = document.createAttribute("value");
		attbtno2.value = "mostra";
		spass.setAttributeNode(attbtno2);
		

		var t1 = document.createTextNode("Inserisci la mail");
		labmail.appendChild(t1);
        var t2 = document.createTextNode("Inserisci la password");
		labpass.appendChild(t2);
		var k2 = document.createTextNode("Conferma la password");
		labpass2.appendChild(k2);
        var t3 = document.createTextNode("Inserisci il nome");
		labnome.appendChild(t3);
        var t4 = document.createTextNode("Inserisci il cognome");
		labcognome.appendChild(t4);
        var t5 = document.createTextNode("Inserisci il luogo di nascita");
		labluogo_n.appendChild(t5);
        var t6 = document.createTextNode("Inserisci la data di nascita");
		labdata_n.appendChild(t6);
        var t7 = document.createTextNode("Inserisci il numero di cellulare ");
		labnumero_c.appendChild(t7);
        var t8 = document.createTextNode("Inserisci il canale preferito");
		labcanalep.appendChild(t8);



		var attbtn = document.createAttribute("type");
		attbtn.value = "button";
		btn.setAttributeNode(attbtn);
		var attbtn2 = document.createAttribute("value");
		attbtn2.value = "Invia";
		btn.setAttributeNode(attbtn2);
		var attbtn3 = document.createAttribute("onclick");
		attbtn3.value = "verifica()";
		btn.setAttributeNode(attbtn3);	
        var attbtno70 = document.createAttribute("id");
        attbtno70.value = "but";
        btn.setAttributeNode(attbtno70);
		var attbtn4 = document.createAttribute("type");
		attbtn4.value = "text";
		inmail.setAttributeNode(attbtn4);	
		var attbtn5 = document.createAttribute("name");
		attbtn5.value = "email";
		inmail.setAttributeNode(attbtn5);	
		var attbtn6 = document.createAttribute("type");
		attbtn6.value = "password";
		inpass.setAttributeNode(attbtn6);	
		var attbtn7 = document.createAttribute("name");
		attbtn7.value = "pass";
		inpass.setAttributeNode(attbtn7);
		var attbtnk6 = document.createAttribute("type");
		attbtnk6.value = "password";
		inpass2.setAttributeNode(attbtnk6);	
		var attbtnk7 = document.createAttribute("name");
		attbtnk7.value = "pass2";
		inpass2.setAttributeNode(attbtnk7);
       	
		var attbtno7 = document.createAttribute("id");
		attbtno7.value = "pass1";
		inpass.setAttributeNode(attbtno7);
		var attbtno7 = document.createAttribute("id");
		attbtno7.value = "pass2";
		inpass2.setAttributeNode(attbtno7);
		
		var attbtnkk5 = document.createAttribute("value");
		attbtnkk5.value = "";
		inpass.setAttributeNode(attbtnkk5);	
		
		var attbtnkkk5 = document.createAttribute("value");
		attbtnkkk5.value = "inserisci";
		inmail.setAttributeNode(attbtnkkk5);	
		
		var attbtnkk6 = document.createAttribute("value");
		attbtnkk6.value = "";
		inpass2.setAttributeNode(attbtnkk6);	
		
        var attbtn8 = document.createAttribute("type");
		attbtn8.value = "text";
		innome.setAttributeNode(attbtn8);	
		var attbtn9 = document.createAttribute("name");
		attbtn9.value = "nome";
		innome.setAttributeNode(attbtn9);

var attbtn10 = document.createAttribute("type");
		attbtn10.value = "text";
		incognome.setAttributeNode(attbtn10);	
		var attbtn11 = document.createAttribute("name");
		attbtn11.value = "cognome";
		incognome.setAttributeNode(attbtn11);	

var attbtn12 = document.createAttribute("type");
		attbtn12.value = "text";
		inluogo_n.setAttributeNode(attbtn12);	
		var attbtn13 = document.createAttribute("name");
		attbtn13.value = "luogon";
		inluogo_n.setAttributeNode(attbtn13);	

var attbtn14 = document.createAttribute("type");
		attbtn14.value = "text";
		indata_n.setAttributeNode(attbtn14);	
		var attbtn15 = document.createAttribute("name");
		attbtn15.value = "datan";
		indata_n.setAttributeNode(attbtn15);	

var attbtn16 = document.createAttribute("type");
		attbtn16.value = "text";
		innumero_c.setAttributeNode(attbtn16);	
		var attbtn17 = document.createAttribute("name");
		attbtn17.value = "numeroc";
		innumero_c.setAttributeNode(attbtn17);	

var attbtn20 = document.createAttribute("type");
		attbtn20.value = "radio";
		incanalepm.setAttributeNode(attbtn20);	
		var attbtn21 = document.createAttribute("name");
		attbtn21.value = "cpreferito";
		incanalepm.setAttributeNode(attbtn21);	
        var attbtn22 = document.createAttribute("value");
		attbtn22.value = "Email";
		incanalepm.setAttributeNode(attbtn22);		

var attbtn18 = document.createAttribute("type");
		attbtn18.value = "radio";
		incanalepw.setAttributeNode(attbtn18);	
		var attbtn19 = document.createAttribute("name");
		attbtn19.value = "cpreferito";
		incanalepw.setAttributeNode(attbtn19);
        var attbtn23 = document.createAttribute("value");
		attbtn23.value = "Telegram";
		incanalepw.setAttributeNode(attbtn23);			

		var attbtn24 = document.createAttribute("name");
		attbtn24.value = "campi";
		form.setAttributeNode(attbtn24);	
		var attbtn25 = document.createAttribute("id");
		attbtn25.value = "campi";
		form.setAttributeNode(attbtn25);	

         

       form.appendChild(labnome);
		form.appendChild(acapo);
         form.appendChild(innome);
		form.appendChild(acapo);
        form.appendChild(labcognome);
		form.appendChild(acapo);
         form.appendChild(incognome);
		form.appendChild(acapo);
		form.appendChild(labmail);
		form.appendChild(acapo);
		form.appendChild(inmail);
		form.appendChild(acapo);
		form.appendChild(labpass);
		form.appendChild(acapo);
		form.appendChild(inpass);
		form.appendChild(acapo);
		form.appendChild(labpass2);
		form.appendChild(acapo);
		form.appendChild(inpass2);
		form.appendChild(acapo);
		form.appendChild(spass);
         form.appendChild(labluogo_n);
		form.appendChild(acapo);
         form.appendChild(inluogo_n);
		form.appendChild(acapo);
          form.appendChild(labdata_n);
		form.appendChild(acapo);
         form.appendChild(indata_n);
		form.appendChild(acapo);
		var g1 = document.createTextNode("Telegram");
		
		var g2 = document.createTextNode("Email");
		
form.appendChild(labnumero_c);
		form.appendChild(acapo);
        form.appendChild(innumero_c);
		form.appendChild(acapo);

         form.appendChild(labcanalep);
		form.appendChild(acapo);
		form.appendChild(g1);
        form.appendChild(incanalepw);
		form.appendChild(acapo);
		form.appendChild(g2);
         form.appendChild(incanalepm);
		form.appendChild(acapo);
        
        
		form.appendChild(btn);
		
       div.appendChild(form);
        contenuto.appendChild(div);
       	



         
	}
}
//nasconde la password durante l'inserimento
function mostrapassr() {
	
	  var x = document.getElementById("pass1");
	  var x1 = document.getElementById("pass2");
	  
	  if (x.type === "password") {
	    x.type = "text";
	  } else {
	    x.type = "password";
	  }
	  if (x1.type === "password") {
		    x1.type = "text";
		  } else {
		    x1.type = "password";
		  }
	
}
