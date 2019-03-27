//Declaración de variables
  var name = "Banking";
 var password = "1234";
//Nombre de usuario

var nombreUsuario = "Alejandro Armas";

//Saldo en cuenta

var saldoCuenta = 7000;

//Limite de extraccion

var limiteExtraccion = 3000;

//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function() {
    cargarNombreEnPantalla();
    actualizarSaldoEnPantalla(saldoCuenta);
    actualizarLimiteEnPantalla(limiteExtraccion);
}

//Funciones que tenes que completar
function sumar(monto){
    saldoCuenta += monto;
}

function restar(monto){
    saldoCuenta -= monto;
}

function saldoDisponible(monto){
    if (monto <= saldoCuenta){
        var saldoAnterior = saldoCuenta;
        alert ("Estás retirando: " + monto +"\n"+ "Saldo anterior: " + saldoAnterior +"\n"+ "Saldo actual: " + (saldoCuenta-monto));
        saldoDisponible;
        restar(monto);
        actualizarSaldoEnPantalla();
    }
}

function cambiarLimiteDeExtraccion() {
    var cambio = parseInt(prompt("Ingrese nuevo límite"));
    if(isNaN(cambio)){
        alert("Debe ingresar un valor válido");
    }else{
        var limiteAnterior = limiteExtraccion;
        alert ("Tu nuevo límite es: " + cambio);
        limiteExtraccion = cambio;
    actualizarLimiteEnPantalla(limiteExtraccion);
    }
}

function extraerDinero() {
    var sustraer = parseInt(prompt("Ingrese monto"));
	if (sustraer){
		if (sustraer <= limiteExtraccion){
			if (sustraer % 100 == 0)
				saldoDisponible(sustraer);
			else //(monto % 100 != 0)
				alert("Solo puedes extraer billetes de $100");
			}
		else {
			alert("Monto supera el limite de extraccion");
		}
	}
	else {
		alert ('Operacion cancelada o introdujo caracteres invalidos');
	}
}

function depositarDinero() {
    var adicionar = parseInt(prompt("Ingrese monto"));
	if (adicionar){
   		var saldoAnterior = saldoCuenta;		
    	        alert ("Estas depositando: " + adicionar +"\n"+ "Saldo anterior: " + saldoAnterior +"\n"+ "Saldo actual: " + (saldoCuenta+adicionar));
    	        sumar(adicionar);
    	        actualizarSaldoEnPantalla()
	}
	else {
		alert ('Operacion cancelada o introdujo caracteres invalidos');
	}
}
    
function pagarServicio() {
    var agua = 350;
    var electricidad = 210;
    var internet = 570;
    var celular = 425;
    var saldoAnterior = saldoCuenta;
    var servicio = parseInt(prompt("¿Cuál servicio deseas pagar?" +"\n"+ "1" + "- Agua" +"\n"+ "2" + "- Electricidad" +"\n"+ "3" + "- Internet" +"\n"+ "4" + "- Celular"));
    switch (servicio){
    case 1:
        if(agua >= saldoCuenta){
            alert ("Monto supera el saldo disponible");
        }else{    
            alert("Estás pagando " + agua + ", por concepto de agua." +"\n"+ "Saldo anterior: " + saldoAnterior +"\n"+ "Saldo actual: " + (saldoCuenta-agua));
            restar(agua);
            actualizarSaldoEnPantalla();
            break;
        }    
    case 2:
        if (electricidad >= saldoCuenta){
            alert ("Monto supera el saldo disponible");
        } else {
            alert("Estás pagando " + electricidad + ", por concepto de electricidad." +"\n"+ "Saldo anterior: " + saldoAnterior +"\n"+ "Saldo actual: " + (saldoCuenta-electricidad));
            restar(electricidad);
            actualizarSaldoEnPantalla();
            break;
        }
    case 3:
        if (internet >= saldoCuenta){
            alert ("Monto supera el saldo disponible");
        } else {
            alert("Estás pagando " + internet + ", por concepto de internet." +"\n"+ "Saldo anterior: " + saldoAnterior +"\n"+ "Saldo actual: " + (saldoCuenta-internet));
            restar(internet);
            actualizarSaldoEnPantalla();
            break;
        }
    case 4:
        if (celular >= saldoCuenta){
            alert ("Monto supera el saldo disponible");
        } else{
            alert("Estás pagando " + celular + ", por concepto de telefonia celular." +"\n"+ "Saldo anterior: " + saldoAnterior +"\n"+ "Saldo actual: " + (saldoCuenta-celular));
            restar(celular);
            actualizarSaldoEnPantalla();
            break;
        }
            default:
                alert("No existe servicio asociado");
        }
}

function transferirDinero() {
    var amiga1 = 1234567;
    var amiga2 = 7654321;
    var saldoAnterior = saldoCuenta;
    var transferencia = parseInt(prompt("Ingrese monto"));
    if(transferencia >= saldoCuenta){
        alert ("Monto supera el saldo disponible");
    }
    else {
    var beneficio = parseInt(prompt("¿A cuál cuenta deseas realizar la transferencia?" +"\n"+ "1" + "- N. Cuenta 1234567" +"\n"+ "2" + "- N. Cuenta 7654321"));
    switch (beneficio){
            case 1:
                alert("Estás transfiriendo " + transferencia +"\n"+ "a la cuenta numero: " + amiga1);
                restar(transferencia);
                actualizarSaldoEnPantalla();
                break;
            case 2:
                alert("Estás transfiriendo " + transferencia +"\n"+ "a la cuenta numero: " + amiga2);
                restar(transferencia);
                actualizarSaldoEnPantalla();
                break;
            default:
                alert("No existe cuenta asociada");
        }
    }
}

function plazoFijo(){
    var plazo = parseInt(prompt("¿Por cuánto tiempo quieres constituirlo?" +"\n"+ "1" + "- 90 días" +"\n"+ "2" + "- 180 días" +"\n"+ "3" + "- 360 días"));
    var inversion = parseInt(prompt("¿Cuánto dinero deseas invertir?"));
    var noventa = inversion * 0.1125;
    var cientoOchenta = inversion * 0.235;
    var anual = inversion * 0.49;
    if(inversion >= saldoCuenta){
       alert("Monto supera el saldo disponible.");
       }
    else{
    switch (plazo){
            case 1:
                alert("En 90 días recibirás," + " $" + noventa);
                sumar(noventa);
                actualizarSaldoEnPantalla();
                break;
            case 2:
                alert("En 180 días recibirás," + " $" + cientoOchenta);
                sumar(cientoOchenta);
                actualizarSaldoEnPantalla();
                break;
            case 3:
                alert("En 360 días recibirás," + " $" + anual);
                sumar(anual);
                actualizarSaldoEnPantalla(); 
                break;
    }
    }
}

function iniciarSesion() {

}

//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}