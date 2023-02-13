var _ = "sheeep";
var i = 1;
var y = 1
var change = 0;
var first_ = true;


function play_first()
{
    document.getElementById("01").volume = '0.4';
	document.getElementById("01").play();
}

function go_to()
{
    if(first_ == true){ play_first(); first_ = false;}

	if(_ == "sheeep"){ first();}
	else{second();}

}

function first(){
	var __ = document.getElementById("myInput").value.toLowerCase();
	if(__ == _) 
	{
		_ = "369";

		setTimeout(()=>{ 	
    	document.getElementById("play").style.visibility = "";

   		},3000);
   		document.getElementById("go").style.visibility = "hidden";
   		document.getElementById("myInput").value = "";
		typer("Abaixo da escada.. noção de tempo",'message_');
		typer("It must have been a coincidence \r\n",'message');
		typer("\r\n https://gartic.com.br/___❄urAge+10xVII+I___/desenho-livre/_1596158409",'messageII');
		document.getElementById("pic").style.filter = "brightness(40%)";
		timer();

		snow();
	}
	else{
		if(__ == 'ennui' || __ == 'ennui_'){alert('eu?')}
		if(__ == 'jupiter' || __ == 'júpiter' || __ == 'jupite' || __ == 'júpite'){alert('a outra forma')}
		if(__ == 'sheep'){alert('falta algo')}

		i+=1;
		y+=1;
		lala();
	}
}

function second(){
    var __ = document.getElementById("myInput").value;
	if(__ == _){
	    document.getElementById("unlock").volume = '0.7';
		document.getElementById("unlock").play();
	 	change_page();
	  }
	else
	{
		i+=1;
		lala();
	}
}


function change_page(){
    setTimeout(()=>{ 	
    window.location.href = "puzzle.html";
    },10000);
    document.getElementById("unlock").play();

}

function timer_(){
    timer();
	var d = new Date();
	var hour = d.getHours();
	if(hour == 18 || hour == 6 || hour == 2){ 
	listen_me();
	document.getElementById("play").style.visibility = "hidden";
}
	else {
	    typer("Oh, Dear! Oh, Dear! I Shall be too Late!",'message_')
	    document.getElementById("myInput").disabled = "true";
	    document.getElementById("pic").style.filter = "brightness(44%)"
    	}
}

function snow(){
	document.getElementById("snow").style.display = "block";
}

function listen_me(){
    setTimeout(()=>{ 	
	    document.getElementById("go").style.visibility = "";
	   document.getElementById("01").volume = "1.0";

   		},10000);
    document.getElementById("01").volume = "0.4";
   	document.getElementById("03").volume = "1.0";
	document.getElementById("03").play();
	typer("056 056 056 055 055 040 055 056 056 056 056 040 055 055 055 055 056",'message');
	typer("Shh..",'message_');
	typer("  Traduza-me. ^^ Octal",'messageII');

}


function timer2()
{
	var status = "";
	var d = new Date();
	var hour = d.getHours();
	var n = d.toLocaleString([], { hour: '2-digit', minute: '2-digit' });
	if(hour >= 18){status = "it is dark outside"}
	document.getElementById("timer").setAttribute = "style', 'white-space: pre;";
	document.getElementById("timer").innerText = "it is " + n + "\r\n";
	document.getElementById("timer").innerText += status;

}

function timer()
{
	var d = new Date();
	var hours =  d.getHours();
	var minutes = d.getMinutes();
	var meridian;
	var status = "";
	if(hours >= 18){status = "it is dark outside";}
	else{status = "";}

	  if (hours > 12) {
	    meridian = 'PM';
	    hours -= 12;
	  } 
	  else if (hours < 12) {
	    meridian = 'AM';
	    if (hours == 0) { hours = 12; }
	  } 
	  else { meridian = 'PM';}
	  
	var h = ("0" + hours).slice(-2);
	var m = ("0" + minutes).slice(-2);


	document.getElementById("timer").setAttribute = "style', 'white-space: pre;";
	document.getElementById("timer").innerText = "it is " + String(h)+":"+String(m)+meridian  + "\r\n";
	document.getElementById("timer").innerText += status;
	}



function lala()
{
	if(i == 3)
	{
		document.getElementById('02').volume = '0.2';
		document.getElementById('02').play();
		document.getElementById("message").style.color = "#8e3939";
		i = 0;
	}
	if(y == 5){
	    alert("ainda está aqui?")
	}
}

function cry()
{
	if(i == 3)
	{
		document.getElementById('01').volume = 0.4;
		document.getElementById("03").volume = 0.5;
		document.getElementById("03").play();
		document.getElementById("message").style.color = "#8e3939";
		i= 0;
	}
	else if(i == 1){
	    alert("base 8.")
	}
}

function typer(texto,id_){
	var area = document.getElementById(id_);
	area.innerHTML = "";
	var u = texto.split("");
	u.forEach((letra,i)=>{
		setTimeout(() => area.innerHTML += letra, 50*i)
	});
}

play_first();