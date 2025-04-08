// // Temperature Converter

// function convertToFahrenheit() {
//     let temp = parseFloat(document.getElementById("temperature").value);
//     if (isNaN(temp)) {
//         console.log("Input temperature:", temp);
//         document.getElementById("result").innerText = "Please enter a valid number!";
//     } else {
//         let fahrenheit = (temp * 9/5) + 32;
//         console.log("Converted to Fahrenheit:", fahrenheit); 
//         document.getElementById("result").innerText = `${temp.toFixed(2)}°C is ${fahrenheit.toFixed(2)}°F`;
//     }
// }

// function convertToCelsius() {
//     let temp = parseFloat(document.getElementById("temperature").value);
//     if (isNaN(temp)) {
//         console.log("Input temperature:", temp);
//         document.getElementById("result").innerText = "Please enter a valid number!";
//     } else {
//         let celsius = (temp - 32) * 5/9;
//         console.log("Converted to Celsius:", celsius); 
//         document.getElementById("result").innerText = `${temp.toFixed(2)}°F is ${celsius.toFixed(2)}°C`;
//     }
// }

// Convert to fahrenheit
function convertToFahrenheit() {
    let temp = parseFloat(document.getElementById("temperature").value);
    let fahrenheit = (temp * 9/5) + 32;
    let message =  (`${temp.toFixed(2)}°C is ${fahrenheit.toFixed(2)}°F`)
    document.getElementById("result").innerText = message;
}

// Convert to celsius
function convertToCelsius() {
    let temp = parseFloat(document.getElementById("temperature").value);
    let celsius = (temp - 32) * 5/9;
    let message =  (`${temp.toFixed(2)}°F is ${celsius.toFixed(2)}°C`)
    document.getElementById("result").innerText = message;
}
