var clave = document.getElementById("clave");


var caracter = "0123456789aqwsdzfcertxbvhgyujnmnljkuio´+ñ{,.!#%$";
var cantidad = 7;

	function claveGenerator (caracter,cantidad){
		clave.value = "";
		for(var i = 0;i<cantidad;i++){
			rand = Math.floor(Math.random()*caracter.length);
			clave.value += caracter.substr(rand,1);
		}
		return clave.value;
	}claveGenerator(caracter,cantidad);

	// console.log(clave.value);



var input = document.getElementById("input-value");
var check = document.getElementById("check-it");
	check.addEventListener('click',comprobando);

	function comprobando(){
		if(input.value == clave.value){
			alert("Código confirmado");
		}
		else{
			alert("No hay coincidencia");
		}

	}



