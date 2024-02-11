// Utility Function - A function that generates errors and throws them

function generateError(message: string, code: number): never { // this function never returns anything. Without the never, it will be marked as void
    throw {message: message, errorCode: code};
}

const result = generateError("Error Imehappen!", 500);
console.log(result); // nothing is returned here