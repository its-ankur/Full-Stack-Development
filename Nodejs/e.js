// const EventEmitter=require("events");
// const evt=new EventEmitter();
// const workingProgress=()=>{
//     console.log("Working in Progress");
//     evt.emit("Done");
// };
// module.exports={workingProgress,evt};

const EventEmitter=require("events");
class MyEmitter extends EventEmitter{
    workingProgress(){
        console.log("Working in Progress");
        this.emit("Done");
    }
}
module.exports=MyEmitter;