const input = document.getElementById("input-el")
const convertBtn = document.getElementById("convert-btn") 
const length = document.getElementById("length-output") 
const volume = document.getElementById("volume-output") 
const mass = document.getElementById("mass-output")

convertBtn.addEventListener("click", function(){
    convertLength()
    convertVolume()
    convertMass()
    
    input.value = ""
})

function convertLength(){
    function metersToFeet(){
        return input.value * 3.281
    }
    function feetToMeters(){
        return input.value * 0.305
    }
    length.innerText = input.value + " meters = " + metersToFeet().toFixed(3) + " feet | " + input.value + " feet = " + feetToMeters().toFixed(3) + " meters" 
}

function convertVolume(){
    function litersToGallons(){
        return input.value * 0.264
    }
    function gallonsToLiters(){
        return input.value * 3.785
    }
    volume.innerText = input.value + " liters = " + litersToGallons().toFixed(3) + " gallons | " + input.value + " gallons = " + gallonsToLiters().toFixed(3) + " liters" 
}

function convertMass(){
    function kilosToPounds(){
        return input.value * 2.204
    }
    function poundsToKilos(){
        return input.value * 0.454
    }
    mass.innerText = input.value + " kilos = " + kilosToPounds().toFixed(3) + " pounds | " + input.value + " pounds = " + poundsToKilos().toFixed(3) + " liters" 
}