function sendAnalytics(data: string) {
    console.log(data);
}

sendAnalytics('The data');

const btn = document.getElementById('btn');

// function add(n1: number, n2: number) {
//     if (n1 + n2 > 0) {
//         return n1 + n2;
//     }
//     return;
// }

function clickHandler(message: string) {
    console.log('Joash is awesome' + message)
}

if (btn) {
    btn.addEventListener('click', clickHandler.bind(null, "Doink"))
}