"use strict";
// Utility Function - A function that generates errors and throws them
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
const result = generateError("Error Imehappen!", 500);
console.log(result); // nothing is returned here
