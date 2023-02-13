var musica_atual = 0;
var rain = document.getElementById("rain");
rain.volume = '0.2';
rain.play();


	function Play() 
	{
	    rain.play()
		Stop();
		if(musica_atual > 3){musica_atual = 0;}
		mus = "mus"+musica_atual.toString();
		document.getElementById(mus).play();
	}

	function Next() 
	{
		Stop();
		var musica = "mus"+musica_atual.toString();
		var numero_proxima = musica_atual+1;
		var proxima_musica = "mus"+numero_proxima.toString();

		if(numero_proxima <= 3)
		{
			document.getElementById(musica).pause();
			document.getElementById(musica).currentTime = '0';
			document.getElementById(proxima_musica).play();
			musica_atual += 1;
	    }
	    else
	    {
	    	alert("la fin.");
	    	musica_atual = 0;
	    }
	}
	function Stop()
	{
		for (var i = 0; i < 4; i++)
		 {
			var musica = "mus"+i.toString();
			if(document.getElementById(musica).paused == false)
			{  document.getElementById(musica).pause();}

		}
		
	}
	
Play();
