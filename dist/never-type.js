"use strict";
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
const result = generateError("Error Imehappen!", 500);
console.log(result);
