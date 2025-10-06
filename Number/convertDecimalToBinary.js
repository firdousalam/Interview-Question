function decimalToBinary(decimal) {
    if (decimal === 0) return "0";

    let binary = "";
    while (decimal > 0) {
        binary = (decimal % 2) + binary;
        decimal = Math.floor(decimal / 2);
    }
    return binary;
}

// Example usage:
let decimalInput = 24;
let binaryOutput = decimalToBinary(decimalInput);

console.log("Binary equivalent of " + decimalInput + " is: " + binaryOutput);