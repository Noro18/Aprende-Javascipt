// Promises

// Promises hanesan object iha javascript ne'ebe representa resultado husi operasaun asyncrhonous ida

// Iha promises iha buat 2: producing code no consuming code no Promiese haensan object ida ne'ebe nia funsaun atu link buat rua ida ne'e

let myPromise = new Promise((resolve, reject) =>{ // ida ne'e pbject ida atu kria proise no nia simu executor function ne'ebe contain mos parameter function 2: resolve no reject, nanti sira nain 2 mak handle kona ba se quando funciton ne operasaun ne'e fullfile ou lae no sei return value ida, value ne sei rai iha variable: value ou error 
    const x = 2

    if (x == 2) {
        resolve(`x is equal ${x}`)
    } else {
        reject("error")
    }
})

myPromise.then(
    function(value) {console.log(value)},
    function(error) {console.log(value)}
)


let myPromise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("I love you")
    }, 3000)
})

myPromise2.then(
    value => {console.log("it is done", value)}
)