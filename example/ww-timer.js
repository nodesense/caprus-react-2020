// running on separate therad
console.log('inside webworker')

// how to receice message from web page

setInterval(() => {
    const n = Math.random();
    // sending randome to webpage
    postMessage({r: n})
}, 5000)

onmessage = function(e) {
    console.log('message received in WebWorker ', e)
    const {a, b} = e.data;
    const result = { sum: a + b}
    // send messae back to browser page
    console.log('done computation, sending result back to web page', result)
    postMessage(result)
}