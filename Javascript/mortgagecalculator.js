const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

  readline.question("What is your Principle? ", function (principal) {
    readline.question("What is your APR? ", function (apr) {
      readline.question("How many payments are you planning to make? (Years of your loan multiplied my 12) ", function (paymentnumber) {
        console.log(`Your Principle is ${principal}`);
        console.log(`Your APR is ${apr}`);
        console.log(`Your APR is ${paymentnumber}`);
        mortgage = (principal * (apr / 12) * (1 + (apr / 12)) ** (paymentnumber)) / (((1 + (apr / 12)) ** (paymentnumber) - 1));
        console.log('Your monthly payment is: ', mortgage);
        readline.close();
        return;
      })})});

