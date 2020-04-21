//file principale del server
var express = require("express");
var cors = require('cors');
var path = require('path');
var bodyParser = require("body-parser");
var url = require("url");
var tel = require("./TelegramModulo.js");
var mail = require("./GestoreMail.js");
var home = require("./HomeModulo.js");
var log = require("./LoginModulo.js");
var reg = require("./RegistrazioneModulo.js");
var visp = require("./VisualizzaProfiloModulo.js");
var agg = require("./AgganciaModulo.js");
var ver = require("./VersaModel.js");
var pag = require("./PagaEsercizioModulo.js");
var app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

tel.GestoreTelegram.comandi();
app.get("/visualizza_profilo",function(req,res) {
	var ogmail = url.parse(req.url, true).query;
	var mail = ogmail.email;
	visp.Visualizza_profilo_model.get_dati_profilo(req,res,mail);
});
app.get("/carte_agganciate",function(req,res) {
	var ogmail = url.parse(req.url, true).query;
	var mail = ogmail.email;
	ver.VersaModel.carte_agganciate(req,res,mail);
	
});
app.get("/home.html",function(req,res) {
	
	home.home_modulo.chiedi_home(req,res);
	
});
app.get("/img",function(req,res) {
	
	home.home_modulo.chiedi_img(req,res);
	
});
app.get("/vis_prof",function(req,res) {
	
	home.home_modulo.visualizza_profilo(req,res);
	
});
app.get("/stile",function(req,res) {
	
	home.home_modulo.chiedi_stile(req,res);
	
});
app.get("/Login",function(req,res) {
	
	home.home_modulo.chiedi_login(req,res);
	
});
app.get("/vis_prof",function(req,res) {
	
	home.home_modulo.visualizza_profilo(req,res);
	
});
app.get("/agg",function(req,res) {
	
	home.home_modulo.aggancia(req,res);
	
});
app.get("/pag_es",function(req,res) {
	
	home.home_modulo.paga_esercizio(req,res);
	
});
app.get("/sottmenu",function(req,res) {
	
	home.home_modulo.sottomenu(req,res);
	
});
app.get("/vers",function(req,res) {
	
	home.home_modulo.versa(req,res);
	
});
app.get("/Registrazione",function(req,res) {
	
	home.home_modulo.chiedi_registrazione(req,res);
	
});

app.get("/verifica_dati_pagamento",function(req,res) {
	var ogmail = url.parse(req.url, true).query;
	var mail = ogmail.mail;
	var nome_e = ogmail.nome_e;
	var importo = ogmail.importo;
	var numcarta = ogmail.numcarta;
	var periodico = ogmail.periodico;
	var data_f;
	var cadenza;
	if (periodico == "si") {
		 data_f = ogmail.data_f;
		 cadenza = ogmail.cadenza;
	}else {
		data_f = "00/00/0000";
		cadenza = "-1";
	}
	pag.PagaEsercizioModel.verifica_dati_pagamento(req,res,mail,nome_e,importo,numcarta,periodico,data_f,cadenza);
	
});
app.get("/carica_dati_pagamento",function(req,res) {
	var ogmail = url.parse(req.url, true).query;
	var mail = ogmail.mail;
	var nome_e = ogmail.nome_e;
	var importo = ogmail.importo;
	var numcarta = ogmail.numcarta;
	var periodico = ogmail.periodico;
	var data_f;
	var cadenza;
	if (periodico == "si") {
		 data_f = ogmail.data_f;
		 cadenza = ogmail.cadenza;
	}else {
		data_f = "00/00/0000";
		cadenza = "-1";
	}
	pag.PagaEsercizioModel.carica_dati(req,res,mail,nome_e,importo,numcarta,periodico,data_f,cadenza);
	
	
});
app.get("/manda_comunicato",function(req,res) {
	var ogmail = url.parse(req.url, true).query;
	var mail = ogmail.mail;
	var testo = ogmail.testo;
	ver.VersaModel.invia_comunicazione(mail,testo);
       res.writeHead(200,{"Content-Type":"text/plain"});
	res.end("mandato correttamente");
	
});
app.get("/manda_mail",function(req,res) {
	var ogmail = url.parse(req.url, true).query;
	var email = ogmail.mail;
	var codice = ogmail.codice;
    var testo = "Mail inviata da paipal, codice di verifica : "+ codice;
	mail.MailModulo.invia_mail(email,testo);
       res.writeHead(200,{"Content-Type":"text/plain"});
	res.end("mandato correttamente");
	
});
app.get("/versamento",function(req,res) {
	var ogmail = url.parse(req.url, true).query;
	var mail = ogmail.mail;
	var cartascelta = ogmail.cartascelta;
	var importoscelto = ogmail.importoscelto;
        var dati_versamento = {
        mail : mail,
       cartascelta : cartascelta , 
       importoscelto : importoscelto
       }
	ver.VersaModel.carica_dati(req,res,dati_versamento);
	
});
app.get("/aggancia_carta",function(req,res) {
        var ogdati  = url.parse(req.url, true).query;
        var mail = ogdati.email;
       var numcarta = ogdati.numcarta;
      var scadenza = ogdati.scadenza;
     var tipo = ogdati.tipo;
    console.log("ciao");
   console.log(""+mail+" "+numcarta +" "+tipo);
        agg.Aggancia_Model.carica_dati(req,res,mail,numcarta,scadenza,tipo);
});

app.post("/login", function(req,res){
	var emailins =  req.body.email;
	var passins =  req.body.pass;
	log.Login_model.verifica(req,res,emailins,passins);	              
});
app.post("/registrazione", function(req,res){
    console.log("Ricevuto una richiesta POST");
    console.log(req.body);
    var emailins =  req.body.email;
    	var nome =  req.body.nome;
    	var cognome =  req.body.cognome;
    	var datan =  req.body.datan;
    	var luogon =  req.body.luogon;
    	var password =  req.body.pass;
    	var cpreferito =  req.body.cpreferito;
    	var numeroc =  req.body.numeroc;
  reg.Registrazione_model.carica_dati(req , res, emailins,nome,cognome,datan,luogon,numeroc,cpreferito,password);
});
var port = process.env.PORT || 5000;
app.listen(port, function() {
    console.log("Listening on " + port);
});
