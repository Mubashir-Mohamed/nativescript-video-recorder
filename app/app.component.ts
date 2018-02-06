import { Component } from "@angular/core";
var vr = require("nativescript-videorecorder");
import {registerElement} from "nativescript-angular/element-registry";
registerElement("VideoPlayer", () => require("nativescript-videoplayer").Video);
@Component({
    selector: "ns-app",
    templateUrl: "app.component.html",
})

export class AppComponent { 
    data:any;
    record(){
let videorecorder = new vr.VideoRecorder();
var options = {
    saveToGallery:true, //default false | optional
    // duration:30, //(seconds) default no limit | optional
    format:'mp4', //allows videos to be played on android devices | optional | recommended for cross platform apps
    size:10, //(MB) default none | optional #android
    hd:true, //default  false low res | optional
    explanation:"Why do i need this permission" //optional on api 23 #android
}

videorecorder.record(options)
.then((data)=>{
    this.data=data;
    console.log(this.data.file)

})
.catch((err)=>{
    console.log(err)
})
    }
}
