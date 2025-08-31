console.log("Start");

setTimeout(() => {
  console.log("Timeout callback");
}, 1000);

Promise.resolve().then(() => {
  console.log("Promise callback");
});

console.log("End");
