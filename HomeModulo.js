
var home_modulo = {
    
    chiedi_home: function(req,res) {
        //res.header('Access-Control-Allow-Origin', '*');
        //res.header('Access-Control-Allow-Headers', 'Origin, X-////Requested-With, Content-Type, Accept');
        //res.writeHead(200,{"Content-Type":"text/html"}); 
        res.sendFile("/home/piero/Scrivania/tutto_il_materiale_utile/progetto-web-perfezionato/src2/home.html");
    
    
    },
    chiedi_stile: function(req,res) {
        //res.header('Access-Control-Allow-Origin', '*');
        //res.header('Access-Control-Allow-Headers', 'Origin, X-////Requested-With, Content-Type, Accept');
        //res.writeHead(200,{"Content-Type":"text/html"}); 
        res.sendFile("/home/piero/Scrivania/tutto_il_materiale_utile/progetto-web-perfezionato/src2/paipal.css");
    
    
    },
     chiedi_img: function(req,res) {
        //res.header('Access-Control-Allow-Origin', '*');
        //res.header('Access-Control-Allow-Headers', 'Origin, X-////Requested-With, Content-Type, Accept');
        //res.writeHead(200,{"Content-Type":"text/html"}); 
        res.sendFile("/home/piero/Scrivania/tutto_il_materiale_utile/progetto-web-perfezionato/src2/soldi.jpg");
    
    
    },
     chiedi_login: function(req,res) {
        //res.header('Access-Control-Allow-Origin', '*');
        //res.header('Access-Control-Allow-Headers', 'Origin, X-////Requested-With, Content-Type, Accept');
        //res.writeHead(200,{"Content-Type":"text/html"}); 
        res.sendFile("/home/piero/Scrivania/tutto_il_materiale_utile/progetto-web-perfezionato/src2/Login.js");
    
    
    },
    chiedi_registrazione: function(req,res) {
        //res.header('Access-Control-Allow-Origin', '*');
        //res.header('Access-Control-Allow-Headers', 'Origin, X-////Requested-With, Content-Type, Accept');
        //res.writeHead(200,{"Content-Type":"text/html"}); 
        res.sendFile("/home/piero/Scrivania/tutto_il_materiale_utile/progetto-web-perfezionato/src2/Registrazione.js");
    
    
    },
    visualizza_profilo: function(req,res) {
        //res.header('Access-Control-Allow-Origin', '*');
        //res.header('Access-Control-Allow-Headers', 'Origin, X-////Requested-With, Content-Type, Accept');
        //res.writeHead(200,{"Content-Type":"text/html"}); 
        res.sendFile("/home/piero/Scrivania/tutto_il_materiale_utile/progetto-web-perfezionato/src2/VisualizzaProfilo.js");
    
    
    },
     aggancia: function(req,res) {
        //res.header('Access-Control-Allow-Origin', '*');
        //res.header('Access-Control-Allow-Headers', 'Origin, X-////Requested-With, Content-Type, Accept');
        //res.writeHead(200,{"Content-Type":"text/html"}); 
        res.sendFile("/home/piero/Scrivania/tutto_il_materiale_utile/progetto-web-perfezionato/src2/Aggancia.js");
    
    
    },
    versa: function(req,res) {
        //res.header('Access-Control-Allow-Origin', '*');
        //res.header('Access-Control-Allow-Headers', 'Origin, X-////Requested-With, Content-Type, Accept');
        //res.writeHead(200,{"Content-Type":"text/html"}); 
        res.sendFile("/home/piero/Scrivania/tutto_il_materiale_utile/progetto-web-perfezionato/src2/Versa.js");
    
    
    },
     paga_esercizio: function(req,res) {
        //res.header('Access-Control-Allow-Origin', '*');
        //res.header('Access-Control-Allow-Headers', 'Origin, X-////Requested-With, Content-Type, Accept');
        //res.writeHead(200,{"Content-Type":"text/html"}); 
        res.sendFile("/home/piero/Scrivania/tutto_il_materiale_utile/progetto-web-perfezionato/src2/PagaEsercizio.js");
    
    
    },
     sottomenu: function(req,res) {
        //res.header('Access-Control-Allow-Origin', '*');
        //res.header('Access-Control-Allow-Headers', 'Origin, X-////Requested-With, Content-Type, Accept');
        //res.writeHead(200,{"Content-Type":"text/html"}); 
        res.sendFile("/home/piero/Scrivania/tutto_il_materiale_utile/progetto-web-perfezionato/src2/sottomenu.js");
    
    
    }
}
    exports.home_modulo = home_modulo;
