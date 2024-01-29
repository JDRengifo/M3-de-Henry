const process = require('process');
const { Z_ASCII } = require('zlib');
const commands = require('./commands/index.js');

function print(output){
   process.stdout.write(output);
   process.stdout.write("\nprompt > ")
}

function bash() {
   process.stdout.write("prompt > ")
   process.stdin.on("data", (data)=>{
      // var args = data.toString()
      // var args = data.toString().trim()  // trim() elimina los espacios antes y después del texto
      var args = data.toString().trim().split(" ")
      var cmd = args.shift();  // cmd -> 'cd'     args -> [ 'commands, otra ] <- 'commands otra'
                               // cuando ejecuto (cd commands otra) en prompt>
     // console.log("--->", args)
      if(commands.hasOwnProperty(cmd)){
         commands[cmd](print, args.join(" "));
      } else {
         print(`command not found: ${cmd}`)
      }
      // print(args)
   })

};

bash();
module.exports = {
   print,
   bash,
};
