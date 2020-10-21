var nombre;
var precio;
var unidades;
var cvv;
var importe;
var titular;
var pago;
var numTarjeta;
var artCarrito=new Array();
var preCarrito=0;
var botonEnviar;

var botonReset;
var errorNombre;

// function resetear(){
// 	errorNombre.textContent="";
// 	errorPrecio.textContent="";
// 	//error.Tarjeta.textContent="";
// }

function cargarPago(){
	if(pago.value=="seleccione"){
		capaTarjeta.style.display="none";
		capaEfectivo.style.display="none";
	}else if(pago.value=="tarjeta"){
		capaTarjeta.style.display="block";
		capaEfectivo.style.display="none";
	}else{
		capaTarjeta.style.display="none";
		capaEfectivo.style.display="block";
	}
}

function manejadorEventos(){
	pago.addEventListener("change",cargarPago);
	submit();

}

function submit(){
	document.formulario.botonEnviar.addEventListener("click",añadirNombre);
	document.formulario.botonEnviar.addEventListener("click",añadirPrecio);
	document.formulario.botonEnviar.addEventListener("click",añadirArt);
}



function cargar(){
	nombre=document.formulario.nombre;
	precio=document.formulario.precio;
	unidades=document.formulario.unidades;
	cvv=document.formulario.cvv;
	importe=document.formulario.importe;
	titular=document.formulario.titular;
	pago=document.formulario.pago;
	numTarjeta=document.formulario.numTarjeta;
	artCarrito=document.formulario.artCarrito;
	preCarrito=document.formulario.preCarrito;
	botonEnviar=document.formulario.botonEnviar;
	botonReset=document.formulario.botonReset;
	errorNombre=document.getElementById("errorNombre");

	capaTarjeta.style.display="none";
	capaEfectivo.style.display="none";
	document.formulario.botonPrint.disabled=true;
}

function recolectarNombre(){
 	nombre=document.formulario.nombre;
 }

 function recolectarPrecio(){
 	precio=document.formulario.precio;
 }

function añadirNombre(){
		cargar();
		var name = /^\D+$/;
		if(nombre.value==""){
			errorNombre.textContent = "falta artículo";
		}else if(name.test(nombre.value)){
			recolectarNombre();
			//añadirArt();
		}else{
			errorNombre.textContent = "debes poner un nombre correcto";
		}
 }

 function añadirPrecio(){
 		cargar();
 		//var number = /^\d{1,4}$/;
 		if(precio.value==""){
 			errorPrecio.textContent = "falta precio";
		}else if(!isNaN(parseFloat(precio.value))){
			recolectarPrecio();
		}else{
			errorPrecio.textContent = "tipo de dato incorrecto";
		}

 }

 

 function añadirArt(){
 		//añadirNombre();
 		var articulos=artCarrito.push('nombre');
 		
 		for(var i=0;i<artCarrito.length;i++){
 			if (i==0){
 				articulos = artCarrito[i];
 			}else{
 				articulos+= "," + artCarrito[i];
 			}
 		}	
 		artCarrito.value = articulos;
 }





window.onload=function(){
	cargar();
	manejadorEventos();


}