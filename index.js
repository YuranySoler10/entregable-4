//taller

//Primer Punto.
//Una función que determine que año es bisiesto
//Un año es bisiesto si es divisible entre 4 y no es divisible entre 100 
//O si es divisible entre 400

function esBisiesto(ano){
    return(ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)
}
console.log(`el punto uno validando año 2024 ${esBisiesto(2024)}`)
console.log(`el punto uno validando año 1997 ${esBisiesto(1997)}`)


//Segundo Punto
//Una función que convierta grados celsius a grados Fahrenheit
//Formula de conversion (0 °C × 9/5) + 32 = 32 °F

function celsiusaFahrenheit(celsius){
    const Fahrenheit = (celsius * 9/5 + 32)

    return `${Fahrenheit} °F`
} 
console.log(celsiusaFahrenheit(0))
console.log(celsiusaFahrenheit(80))
console.log(celsiusaFahrenheit(-54))



//Tercer Punto
//Una función que recibe dos parametros y que devuelva el mayor de los dos números 

function mayorDeDos(number1,number2){
    if(number1 === number2){
        return `Ambos números son iguales`
    }
    return number1 > number2 ? number1 : number2
}

console.log(mayorDeDos(8,9))
console.log(mayorDeDos(1,0))
console.log(mayorDeDos(5,4))

//Cuarto Punto
//Una función que me devuelva una cadena de texto segun los minutos
//Hay 60 minutos en una hora
//Las horas son los minutos entre 60 
//Los minutos restantes son el resto de la division entre 60

function convertirMinutos(minutos){
    const horas = Math.floor(minutos/60)
    const minutosRestantes = minutos % 60
    
    return `${horas} hora(s) y ${minutosRestantes} minutos`
}

console.log(convertirMinutos(1342))
console.log(convertirMinutos(452))
console.log(convertirMinutos(699))


//Quinto punto
//Una función que determina si el numero recibido esta entre el intervalo dado
//Si 'x' pertenece al conjunto [a,b] puede que x=a ó x=b

function estaEnRango(numero, limiteInferior, limiteSuperior) {
    if (
      typeof numero !== "number" ||
      typeof limiteInferior !== "number" ||
      typeof limiteSuperior !== "number"
    ) {
      return "Todos los parámetros deben ser números."
    }
  
    return numero >= limiteInferior && numero <= limiteSuperior;
  }

console.log(estaEnRango(7, 3, 17))
console.log(estaEnRango(15, 4, 45))
console.log(estaEnRango(24, 5, 5))
console.log(estaEnRango('x', 5, 15))
  


//Sexto punto
//Una función que calcule el precio final despues de aplicar un porcentaje de descuento a un precio inicial 
//Parametros precio inicial y descuento
//La función debe devolver el precio final despues de aplicar el descuento

  
function calcularPrecioFinal(precioInicial, porcentajeDescuento) {

    const descuento = (precioInicial * porcentajeDescuento) / 100
    const precioFinal = precioInicial - descuento
    return `Total a pagar: $ ${precioFinal} COP`
    }
      
console.log(calcularPrecioFinal(2500, 15))
console.log(calcularPrecioFinal(45850,32))
console.log(calcularPrecioFinal(123456789,50))
      

//Septimo punto
//Una función que puede determinar si una persona puede votar 
//La función debe devolver true si la edad es 18 o mayor, y false en caso contrario.

function puedeVotar(edad) {
    if (edad >= 18) {
      return `${edad} La persona puede votar`
    } else {
      return `${edad} La persona no puede votar`
    }
  }

console.log(puedeVotar(25))
console.log(puedeVotar(15))
console.log(puedeVotar(85))

//Octavo Punto
//Función que calcule el área de un triángulo 
//Parametros Base y Altura
//La función debe devolver el área del triángulo

function calcularAreaTriangulo(base, altura){
    const area = (base * altura / 2)
    return `${area} [unidades]^2`
}

console.log(calcularAreaTriangulo(3,5))
console.log(calcularAreaTriangulo(7,8))
console.log(calcularAreaTriangulo(4,5))