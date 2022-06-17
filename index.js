let num = 100;
document.getElementById("count").innerHTML = num


const inputNum = () => {
    //kilo to pound
    let outputKiloPound = num * 2.20462;
    document.getElementById("kilo-pound").innerHTML = outputKiloPound.toFixed(3); 
    document.getElementById("numInput").innerHTML = num

    //pound to kilo
    let outputPoundKilo = num / 2.20462;
    document.getElementById("pound-kilo").innerHTML = outputPoundKilo.toFixed(3); 
    document.getElementById("numInput1").innerHTML = num
    
    //liters to gallons
    let outputLiterGal = num * 0.264172;
    document.getElementById("liter-gallon").innerHTML = outputLiterGal.toFixed(3); 
    document.getElementById("numInput2").innerHTML = num

    //gallons to liters
    let outputGalLiter = num / 0.264172;
    document.getElementById("gallon-liter").innerHTML = outputGalLiter.toFixed(3); 
    document.getElementById("numInput3").innerHTML = num
   
    //meters to feet
    let outputMeterFeet = num * 3.28084;
    document.getElementById("meter-feet").innerHTML = outputMeterFeet.toFixed(3); 
    document.getElementById("numInput4").innerHTML = num
    
    //feet to meters
    let outputFeetMeter = num / 3.28084;
    document.getElementById("feet-meter").innerHTML = outputFeetMeter.toFixed(3); 
    document.getElementById("numInput5").innerHTML = num
    


}



