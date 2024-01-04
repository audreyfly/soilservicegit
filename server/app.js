var grpc = require("@grpc/grpc-js")
var protoLoader = require("@grpc/proto-loader")
var PROTO_PATH = __dirname + "/protos/soil.proto"
var packageDefinition = protoLoader.loadSync(
  PROTO_PATH
)

var movies_proto = grpc.loadPackageDefinition(packageDefinition).soil

var data = [
  {
    soilTemp:"degree",
    soilTemp:"number",
  },
  {
    hunidity:"water content",

  },
  {
    drainage:"",



function getData(call,callback){
for (var i=0;i<data.length;i++){
call.write({
temp:data[i].tempType,
})
}
call.end()

function getData(call,callback){
for (var i=0;i<data.length;i++){
call.write({
humidity:data[i].huidityamount,
})
}
call.end()

function getData(call,callback){
for (var i=0;i<data.length;i++){
call.write({
soilLocation:data[i].Location,
})
}
call.end()


var server = new grpc.Server()
server.addService(sheep_proto.sheepService.service,{getData;getData})
server.bindAsync("0.0.0.0:40000", grpc.ServerCredentials.createInsecure(), function() {
  server.start()
})
}
