var input = document.getElementById('input');
var result = document.getElementById('result');
var inputType = document.getElementById('inputType');
var resultType = document.getElementById('resultType');
var inputTypeValue, resultTypeValue;

input.addEventListener('input', myResult);
inputType.addEventListener('change', myResult);
resultType.addEventListener('change', myResult);

inputTypeValue = inputType.value;
resultTypeValue = resultType.value;

function myResult() {
    inputTypeValue = inputType.value;
    resultTypeValue = resultType.value;

    // Input validation
    var inputValue = parseFloat(input.value);
    if (isNaN(inputValue)) {
        result.value = 'Invalid Input';
        return;
    }

    // Conversion logic
    var conversionFactors = {
        meter: 1,
        kilometer: 0.001,
        centimeter: 100,
        millimeter: 1000,
        inch: 39.3701,
        feet: 3.28084,
        yard: 1.09361,
        mile: 0.000621371, // Miles conversion factor
        nauticalMile: 0.000539957 // Nautical miles conversion factor
    };

    result.value = (inputValue * conversionFactors[inputTypeValue] / conversionFactors[resultTypeValue]).toFixed(2);
}