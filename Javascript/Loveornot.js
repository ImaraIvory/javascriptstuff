const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
   
var lovesme="Yay! I love you too!";
var nolove="Awe! How Rude!";

  readline.question('Do you love me?\nyes or no?', name => {
    if (name=="yes") {
        console.log(lovesme)
        readline.close();
        return
    };
    if (name=="no") {
        console.log(nolove)
        readline.close();
        return
    };
    console.log("What? You had literally two options!\nTry again you renegade.")
    readline.close();
    return
});