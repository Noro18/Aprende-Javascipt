console.log("Start");

// Run a function every 2 seconds (2000ms)
let counter = 0;
const intervalId = setInterval(() => {
  counter++;
  console.log(`This message appears every 2 seconds. Count: ${counter}`);

  // Stop the interval after 5 times
  console.log(counter)
}, 2000);

console.log("End");
