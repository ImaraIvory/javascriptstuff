const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
   
var lovesme="Yay! I love you too!";
var nolove="Awe! How Rude!";

function ask() {
    readline.question('Do you love me?\nyes or no?', love => {
      if (eval(love)) {
          readline.close();
          return;
      }
  });
}
  
function eval (temp) {
  if (temp=="yes") {
    console.log(lovesme)
    return true
  };
  if (temp=="no") {
    console.log(nolove)
    return true
  };
  console.log("\nWhat? You had literally two options!\nTry again you renegade.\n")
  ask();
}



ask();
