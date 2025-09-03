// Iha javascript iha tipo parameter 2 ne'ebe ita bele pasa iha funciotn ida

// 1. Default parameter: nia value ida default iha ona antest ita atu call function jadi nia value bele troka vazeia ba parameter ne'ebe ita pasa ba


function greet(name="guest") {
    console.log(`hi ${name}`);
    
}

greet()
greet("ezeauiel")


// 2. Rest parameter: nia quantidade paramtere ne'ebe bele pasa wainhria ita call depende ou infinite


function sum(...number) {
    return number.reduce((a, b) => a + b, 0);
}

console.log(sum(1, 2));
console.log(sum(1, 2, 3));
