function cambioTemperatura() {
    let temperatura = parseFloat(prompt("Ingrese la t° en Celsius: "));
    if (!isNaN(temperatura)){
        var fahrenheit = (temperatura * 9/5)+32; 
        var kelvin = temperatura + 273.15;
        
        console.log("Grados fahrenheir: " + fahrenheit);
        console.log("Grados kelvin:  " + kelvin);

    }else {
        alert("Error: Ingresa un número");
    }
};
cambioTemperatura();

