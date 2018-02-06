"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var vr = require("nativescript-videorecorder");
var element_registry_1 = require("nativescript-angular/element-registry");
element_registry_1.registerElement("VideoPlayer", function () { return require("nativescript-videoplayer").Video; });
var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.record = function () {
        var _this = this;
        var videorecorder = new vr.VideoRecorder();
        var options = {
            saveToGallery: true,
            // duration:30, //(seconds) default no limit | optional
            format: 'mp4',
            size: 10,
            hd: true,
            explanation: "Why do i need this permission" //optional on api 23 #android
        };
        videorecorder.record(options)
            .then(function (data) {
            _this.data = data;
            console.log(_this.data.file);
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "ns-app",
            templateUrl: "app.component.html",
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMsSUFBSSxFQUFFLEdBQUcsT0FBTyxDQUFDLDRCQUE0QixDQUFDLENBQUM7QUFDL0MsMEVBQXNFO0FBQ3RFLGtDQUFlLENBQUMsYUFBYSxFQUFFLGNBQU0sT0FBQSxPQUFPLENBQUMsMEJBQTBCLENBQUMsQ0FBQyxLQUFLLEVBQXpDLENBQXlDLENBQUMsQ0FBQztBQU1oRjtJQUFBO0lBdUJBLENBQUM7SUFyQkcsNkJBQU0sR0FBTjtRQUFBLGlCQW9CQztRQW5CTCxJQUFJLGFBQWEsR0FBRyxJQUFJLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUMzQyxJQUFJLE9BQU8sR0FBRztZQUNWLGFBQWEsRUFBQyxJQUFJO1lBQ2xCLHVEQUF1RDtZQUN2RCxNQUFNLEVBQUMsS0FBSztZQUNaLElBQUksRUFBQyxFQUFFO1lBQ1AsRUFBRSxFQUFDLElBQUk7WUFDUCxXQUFXLEVBQUMsK0JBQStCLENBQUMsNkJBQTZCO1NBQzVFLENBQUE7UUFFRCxhQUFhLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQzthQUM1QixJQUFJLENBQUMsVUFBQyxJQUFJO1lBQ1AsS0FBSSxDQUFDLElBQUksR0FBQyxJQUFJLENBQUM7WUFDZixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7UUFFL0IsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLFVBQUMsR0FBRztZQUNQLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDcEIsQ0FBQyxDQUFDLENBQUE7SUFDRSxDQUFDO0lBdEJRLFlBQVk7UUFMeEIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFdBQVcsRUFBRSxvQkFBb0I7U0FDcEMsQ0FBQztPQUVXLFlBQVksQ0F1QnhCO0lBQUQsbUJBQUM7Q0FBQSxBQXZCRCxJQXVCQztBQXZCWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG52YXIgdnIgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXZpZGVvcmVjb3JkZXJcIik7XG5pbXBvcnQge3JlZ2lzdGVyRWxlbWVudH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2VsZW1lbnQtcmVnaXN0cnlcIjtcbnJlZ2lzdGVyRWxlbWVudChcIlZpZGVvUGxheWVyXCIsICgpID0+IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtdmlkZW9wbGF5ZXJcIikuVmlkZW8pO1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibnMtYXBwXCIsXG4gICAgdGVtcGxhdGVVcmw6IFwiYXBwLmNvbXBvbmVudC5odG1sXCIsXG59KVxuXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHsgXG4gICAgZGF0YTphbnk7XG4gICAgcmVjb3JkKCl7XG5sZXQgdmlkZW9yZWNvcmRlciA9IG5ldyB2ci5WaWRlb1JlY29yZGVyKCk7XG52YXIgb3B0aW9ucyA9IHtcbiAgICBzYXZlVG9HYWxsZXJ5OnRydWUsIC8vZGVmYXVsdCBmYWxzZSB8IG9wdGlvbmFsXG4gICAgLy8gZHVyYXRpb246MzAsIC8vKHNlY29uZHMpIGRlZmF1bHQgbm8gbGltaXQgfCBvcHRpb25hbFxuICAgIGZvcm1hdDonbXA0JywgLy9hbGxvd3MgdmlkZW9zIHRvIGJlIHBsYXllZCBvbiBhbmRyb2lkIGRldmljZXMgfCBvcHRpb25hbCB8IHJlY29tbWVuZGVkIGZvciBjcm9zcyBwbGF0Zm9ybSBhcHBzXG4gICAgc2l6ZToxMCwgLy8oTUIpIGRlZmF1bHQgbm9uZSB8IG9wdGlvbmFsICNhbmRyb2lkXG4gICAgaGQ6dHJ1ZSwgLy9kZWZhdWx0ICBmYWxzZSBsb3cgcmVzIHwgb3B0aW9uYWxcbiAgICBleHBsYW5hdGlvbjpcIldoeSBkbyBpIG5lZWQgdGhpcyBwZXJtaXNzaW9uXCIgLy9vcHRpb25hbCBvbiBhcGkgMjMgI2FuZHJvaWRcbn1cblxudmlkZW9yZWNvcmRlci5yZWNvcmQob3B0aW9ucylcbi50aGVuKChkYXRhKT0+e1xuICAgIHRoaXMuZGF0YT1kYXRhO1xuICAgIGNvbnNvbGUubG9nKHRoaXMuZGF0YS5maWxlKVxuXG59KVxuLmNhdGNoKChlcnIpPT57XG4gICAgY29uc29sZS5sb2coZXJyKVxufSlcbiAgICB9XG59XG4iXX0=