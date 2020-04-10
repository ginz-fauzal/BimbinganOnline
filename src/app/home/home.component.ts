import { Component, AfterViewInit, ViewChild } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { Page } from "tns-core-modules/ui/page";
import * as ApplicationSettings from "tns-core-modules/application-settings";
import { GridLayout } from "tns-core-modules/ui/layouts/grid-layout";
import * as enums from "tns-core-modules/ui/enums";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})
export class HomeComponent implements AfterViewInit {
    animate(grid: GridLayout, position: number) {
        grid.animate({
            opacity: 0,
            translate: { x: position, y: 0 },
            delay: 0,
            duration: 10
        }).then(() => {
            console.log("Animation finished.");
            grid.animate({
                opacity: 1,
                translate: { x: 0, y: 0 },
                delay: 0,
                duration: 2000,
                curve: enums.AnimationCurve.easeOut
            })
        }).catch((e) => {
            console.log(e.message);
        });
    }
    data = [
        { "id": "1", "day": "Monday", "time": "09:00", "class": "Bimbingan ke-1" },
        { "id": "2", "day": "Monday", "time": "11:00", "class": "Bimbingan ke-2" },
        { "id": "3", "day": "Monday", "time": "13:00", "class": "Bimbingan ke-3" },
        { "id": "4", "day": "Tuesday", "time": "09:00", "class": "Bimbingan ke-4" },
        { "id": "5", "day": "Tuesday", "time": "11:00", "class": "Bimbingan ke-5" },
        { "id": "6", "day": "Tuesday", "time": "13:00", "class": "Bimbingan ke-6" },
        { "id": "7", "day": "Tuesday", "time": "15:00", "class": "Bimbingan ke-7" },
        { "id": "8", "day": "Wednesday", "time": "11:00", "class": "Bimbingan ke-8" },
        { "id": "9", "day": "Friday", "time": "09:00", "class": "Bimbingan ke-9" },
        { "id": "10", "day": "Friday", "time": "13:00", "class": "Bimbingan ke-10" }
    ];
    darkmode: boolean = false;
    constructor(private router: RouterExtensions, private page: Page) {
        this.darkmode = ApplicationSettings.getBoolean("darkmode");
    }

    ngAfterViewInit() {

    }

    onDarkMode() {
        if (this.darkmode == true) {
            this.darkmode = false;
        } else {
            this.darkmode = true;
        }
        ApplicationSettings.setBoolean("darkmode", this.darkmode);
    }

    onNavItemTap(navItemRoute: string): void {
        this.router.navigate([navItemRoute], {
            transition: {
                name: "slideRight",
                duration: 500,
                curve: "easeIn"
            }
        });
    }




}
