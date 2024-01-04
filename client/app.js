var readline = require('readline')
var readlineSync = require('readlineSync')
var PROTO_PATH =_dirname + '/protos/chat.protos'
var gprc = require('@grpc/gprc-js')
var protoLoader =require('@grpc/proto-Loader')

var packageDefinition = protoLoader.loadSync(
  PROTO_PATH)
  var chat_proto=gprc.loadPackageDefinition(packageDefinition).chat;



var packageDefinition = protoLoader.loadSync(PROTO_PATH)
var movies = grpc.loadPackageDefinition(packageDefinition).soil_proto;
var client = new chat_proto.chatService('localhost:40000', grpc.credentials.createInsecure());

var name=readlineSync.question("location of soil?")
var call=client.sendMessage();

call.on('data',function(req){
console.log( [data][TempRequest, hunidityRequest,drainageRequest] )
});
call.on('end', function(){

})
call.on('error', function(e){
  console.log(e)("Cannot connect to  server")
})



var rl=readline.createInterface({
  input:process.stdIn,
  output:process.stdOut,
});


rl.on('line',function (line){
   switch(line.trim()) {
  case 'hello':
    console.log('world!');
    break;
  default:
    console.log('What is your userName `' + line.trim() + '`');
    break;
}
rl.setPrompt(prefix, prefix.length);
rl.prompt();
}).on('close', function() {
console.log('Please enter your password ');
process.exit(0);
});
console.log(prefix + 'What service do you require .');
rl.setPrompt(prefix, prefix.length);
rl.prompt();

}
}
