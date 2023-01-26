/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const inputEl = document.getElementById("input-el")
const convertBtn = document.getElementById("convert-btn")
const lengthP = document.getElementById("length-p")
const volumeP = document.getElementById("volume-p")
const massP = document.getElementById("mass-p")
const meter = 3.281
const liter = 0.264
const kilogram = 2.204

function convert() {
    let toConvert = inputEl.value
    lengthP.innerText = `${toConvert} meters = ${(toConvert*meter).toFixed(3)} feet | ${toConvert} feet = ${(toConvert/meter).toFixed(3)} meters`
    volumeP.innerText = `${toConvert} liters = ${(toConvert*liter).toFixed(3)} gallons | ${toConvert} gallons = ${(toConvert/liter).toFixed(3)} liters`
    massP.innerText = `${toConvert} kilos = ${(toConvert*kilogram).toFixed(3)} pounds | ${toConvert} pounds = ${(toConvert/kilogram).toFixed(3)} kilos`
}