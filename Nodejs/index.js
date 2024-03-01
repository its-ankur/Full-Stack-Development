// const code=require('./code');
// console.log(code);

// const EventEmitter=require("events");
// let evt=new EventEmitter();
// evt.emit("Done");
// evt.on("Done",()=>{
//     console.log("Event Done");
// });
// evt.emit("Done");
// const workingProgress=require('./e');
// const EventEmitter=require("events");
// const evt=new EventEmitter();
// evt.on("Done",()=>{
//     console.log("Event Done");
// });
// workingProgress();
// const EventEmitter=require("events");
// const e=require('./e');
// e.evt.on("Done",()=>{
//     console.log("Event Done");
// });
// e.workingProgress();

const MyEmitter=require('./e');
const evt=new MyEmitter();
evt.on("Done",()=>{
    console.log("Event Done");
});
evt.workingProgress();