// Utility Function - A function that generates errors and throws them
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
console.log(generateError("Error Imehappen!", 500));
