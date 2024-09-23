const readline = require('node:readline');
const fs = require("fs");


fs.mkdir('./users', { recursive: true }, (err) => {
  if (err) {
    return console.error(`Error creating directory: ${err}`);
  }
});

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


rl.question('input username\n', username => {
    let x = fetch(`https://api.github.com/users/${username}/repos`)
    .then(response => response.json())
    .then(json => {
        fs.appendFile(`./users/${username}.txt`,JSON.stringify(json, null, 2),function(err){
            if(err) console.error(err);
            else console.log("done!!");
        })
    });
  rl.close();
});

