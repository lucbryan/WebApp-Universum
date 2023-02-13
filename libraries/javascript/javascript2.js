var grade = document.getElementById("grade");
var pos_inicio = [];



for(var i = 0; i<4;i++){
	for(var j = 0; j < 6; j++){
		var novaPeca = document.createElement("div");
		novaPeca.id = "x"+j+"y"+i;
		novaPeca.style.top=i*100+"px";
		novaPeca.style.left=j*100+"px";
		novaPeca.style.backgroundPositionX = ((j*25/(6-1))*100)+"%";
		novaPeca.style.backgroundPositionY = ((i*25/(4-1))*100)+"%";
		novaPeca.style.backgroundImage = "url(imgs/gallery/rose.jpg)";
		novaPeca.setAttribute("onclick","clicarPeca(this)");
		grade.appendChild(novaPeca);
		pos_inicio.push(novaPeca);

	}
}

var escolhido1 = null;
var escolhido2= null;
var inicio_ = false;
var block = false;

var _1xy = [];
var _2xy = [];


function clicarPeca(argElemento){
	if(block == false){
		if(escolhido1 == null){
		  escolhido1 = argElemento;
		}
		else if(escolhido2 == null){
			escolhido2=argElemento;
			inicio();
			trocarPeca();
		}
	}
}

function To_block(){
	//document.getElementById("grade").style.visibility = "hidden";
	document.getElementById("reinicio_").style.visibility = "";
	block = true;
}

function To_Unlock(){
	//document.getElementById("grade").style.visibility = "";
	document.getElementById("reinicio_").style.visibility = "hidden";
	document.getElementById("grade").style.filter = "grayscale(0%)";
	document.getElementById("darlin").style.visibility="hidden"
	tries = 0;
	block = false;
	
	_1xy = null;
	_2xy_ = null;
	_1xy = [];
	_2xy_ = [];
	
	
    reinicio();
	embaralhar(100);


}

function trocarPeca(){
	var escolhidoTrocadoTop = escolhido1.style.top;
	var escolhidoTrocadoLeft = escolhido1.style.left;
	escolhido1.style.top=escolhido2.style.top;

	escolhido1.style.left = escolhido2.style.left;
	escolhido2.style.top= escolhidoTrocadoTop;
	escolhido2.style.left=escolhidoTrocadoLeft;

	_1xy.push(escolhido1);
	_2xy.push(escolhido2);


	escolhido1=null;
	escolhido2=null;

	validar();

}
function embaralhar(argIteracoes){
	for(var i = 0; i < argIteracoes;i++){
		var escolhido1X=0;
		var escolhido1Y=0;
		var escolhido2X=0;
		var escolhido2Y=0;

		while(escolhido1X==escolhido2X && escolhido1Y == escolhido2Y){
			escolhido1X=Math.round(Math.random()*(6-1));
			escolhido1Y=Math.round(Math.random()*(4-1));

			escolhido2X=Math.round(Math.random()*(6-1));
			escolhido2Y=Math.round(Math.random()*(4-1));

		}
		escolhido1=document.getElementById("x"+escolhido1X+"y"+escolhido1Y);
		escolhido2=document.getElementById("x"+escolhido2X+"y"+escolhido2Y);
		trocarPeca();
	}
}
function validar(){
	var quebraCabecaOk= true;
	for(var i = 0; i<4;i++){
		for(var j = 0; j < 6;j++){
			var posicaoXEsperada = j*100+"px";
			var posicaoYEsperada = i*100+"px";

			var pecaVerificada = document.getElementById("x"+j+"y"+i);
			if(pecaVerificada.style.left!=posicaoXEsperada|| pecaVerificada.style.top!=posicaoYEsperada){
				quebraCabecaOk = false;
			}
		}
	}
	if(quebraCabecaOk){
		parar();
		if((tries <= 2 && horas==0 && minutos == 2 && segundos == 0 && centesimas == 0) ||  (tries <= 2 && horas == 0 && minutos < 2)){ change_page();}
		else{fail();}
	}
	
	else if((inicio_==true && tries == 2 && horas >0) || (inicio_==true && tries == 2 && minutos > 2) || (inicio_==true && tries == 2 && minutos == 2 && centesimas > 0)  ){  fail(); }

	}

function resolve(){
	if(inicio_ == false){inicio();}
	else if(inicio == true) {reinicio(); inicio();}
	for(var i = 0; i<4;i++){
	for(var j = 0; j < 6; j++){
		(function(){
			        var jj =  j;
			        var ii = i;

        setTimeout(function(){
		id = "x"+jj+"y"+ii;
		peca = document.getElementById(id);
		peca.style.top=ii*100+"px";
		peca.style.left=jj*100+"px";

		if(jj == 5 && ii == 3){parar();validar();}


        },1000*j);

    })();
}
}
}

function resolve_padrao(){
	if(inicio_ == false){inicio();}
	else if(inicio == true) {reinicio(); inicio();}
	for(var i = _2xy.length-1;i >=0;i--){

    (function(){
        var j =  i;

        setTimeout(function(){
        var t = _1xy.length - j-1;

	    escolhido2 = _2xy[t];
		escolhido1 = _1xy[t];
		trocarPecaResolver();
        document.getElementById("darlin").innerText=t;

        if(t == 0){parar();To_block();}


        },100*j);

    })();
}
}


function trocarPecaResolver(){
	var escolhidoTrocadoTop = escolhido1.style.top;
	var escolhidoTrocadoLeft = escolhido1.style.left;
	escolhido1.style.top=escolhido2.style.top;

	escolhido1.style.left = escolhido2.style.left;
	escolhido2.style.top= escolhidoTrocadoTop;
	escolhido2.style.left=escolhidoTrocadoLeft;

	escolhido1=null;
	escolhido2=null;

}
function Page(){
	window.location.href = "solivagant.html"
}
function change_page(){
		//document.getElementById("contador").style.color = "#6c1a1a";
		//document.getElementById("grade").style.filter = "brightness(20%)";
		//document.getElementById("grade").style.filter = "contrast(1000%)"
		document.getElementById("change_page").style.visibility = "";
		block = true;
}
function fail(){
		if(tries < 2)
	  {
	      grayscale+=40;
	      reiniciar_jogo();
	  }
	 else
	 {
	     // tentativas = 2, passou do tempo
	    //  fim do jogo para o usuário, o jogo deve
	    //  receber escala-cinza 100%, ser embaralhado; resolvido;
	    document.getElementById("grade").style.filter = "grayscale(100%)";
	    To_block()

	 }
}
function reiniciar_jogo(){
    // o jogo foi resolvido, porém em tempo insatisfatório.
    // as coordenadas de _1xy e _2xy podem ser descartadas, já que o usuário resolveu.
		alert("Out of time")
		reinicio();
	    _1xy = null;
    	_2xy_ = null;
    	_1xy = [];
    	_2xy = [];

		embaralhar(100);
		document.getElementById("grade").style.filter = "grayscale("+String(grayscale)+"%)";
		tries+=1;

}
function begin(){

for(var i = 0; i<4;i++){
	for(var j = 0; j < 6; j++){
		id = "x"+j+"y"+i;
		peca = document.getElementById(id);
		peca.style.top=i*100+"px";
		peca.style.left=j*100+"px";
	}
}
}
embaralhar(100);

var grayscale = 0;
var contrast = 100;
var tries = 0;
var centesimas = 0;
var segundos = 0;
var minutos = 0;
var horas = 0;

var centesimas = 0;
var segundos = 0;
var minutos = 0;
var horas = 0;

function inicio () {

	if(inicio_ == false){
    control = setInterval(cronometro,10);
    document.getElementById("inicio").disabled = true;
    document.getElementById("parar").disabled = false;
    document.getElementById("continuar").disabled = true;
    document.getElementById("reinicio").disabled = false;
    inicio_ = true;
}

}
function parar () {
    clearInterval(control);
    document.getElementById("parar").disabled = true;
    document.getElementById("continuar").disabled = false;
}
function reinicio () {
    clearInterval(control);
    centesimas = 0;
    segundos = 0;
    minutos = 0;
    horas = 0;
    Centesimas.innerHTML = ":00";
    Segundos.innerHTML = ":00";
    Minutos.innerHTML = ":00";
    Horas.innerHTML = "00";
    document.getElementById("inicio").disabled = false;
    document.getElementById("parar").disabled = true;
    document.getElementById("continuar").disabled = true;
    document.getElementById("reinicio").disabled = true;
    inicio_ = false;
}

function cronometro () {
    if (centesimas < 99) {
        centesimas++;
        if (centesimas < 10) { centesimas = "0"+centesimas }
        Centesimas.innerHTML = ":"+centesimas;
    }
    if (centesimas == 99) {
        centesimas = -1;
    }
    if (centesimas == 0) {
        segundos ++;
        if (segundos < 10) { segundos = "0"+segundos }
        Segundos.innerHTML = ":"+segundos;
    }
    if (segundos == 59) {
        segundos = -1;
    }
    if ( (centesimas == 0)&&(segundos == 0) ) {
        minutos++;
        if (minutos < 10) { minutos = "0"+minutos }
        Minutos.innerHTML = ":"+minutos;
    }
    if (minutos == 59) {
        minutos = -1;
    }
    if ( (centesimas == 0)&&(segundos == 0)&&(minutos == 0) ) {
        horas ++;
        if (horas < 10) { horas = "0"+horas }
        Horas.innerHTML = horas;
    }
}




function mudar(url){


	var nodes = document.getElementById('grade').childNodes;
for(var i=1; i<nodes.length; i++) {
         nodes[i].style.backgroundImage = url;
}
}