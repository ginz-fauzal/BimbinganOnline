import { Component, OnInit } from '@angular/core';
import { Page } from "tns-core-modules/ui/page";
import { RouterExtensions } from "nativescript-angular/router";
import * as ApplicationSettings from "tns-core-modules/application-settings";
import { GridLayout } from "tns-core-modules/ui/layouts/grid-layout";
import * as enums from "tns-core-modules/ui/enums";
import { Label } from "tns-core-modules/ui/label";
import { Image } from "tns-core-modules/ui/image";

@Component({
    moduleId: module.id,
    selector: 'tambah',
    templateUrl: './tambah.component.html'
})

export class TambahComponent implements OnInit {

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
        { "id": "1", "photo": "student0.jpg", "name": "Fauzal Ghani", "presensi": 0, "gender": "Male" },
        { "id": "2", "photo": "student1.jpg", "name": "Nugroho Wisnu", "presensi": 0, "gender": "Male" },
        { "id": "3", "photo": "student2.jpg", "name": "Ferry Kurniawan", "presensi": 0, "gender": "Male" },
        { "id": "4", "photo": "student3.jpg", "name": "Nenza Nurfirmansyah", "presensi": 0, "gender": "Male" },
        { "id": "5", "photo": "student4.jpg", "name": "Cecep Saefudin", "presensi": 0, "gender": "Male" },
        { "id": "6", "photo": "student5.jpg", "name": "Arifah Ummul", "presensi": 0, "gender": "Female" },
        { "id": "7", "photo": "student6.jpg", "name": "Kholidah Syadiah", "presensi": 0, "gender": "Female" },
    ];
    index: number = 0;
    darkmode: boolean = false;
    constructor(private router: RouterExtensions, page: Page) {
        this.darkmode = ApplicationSettings.getBoolean("darkmode");
    }

    ngOnInit() { }

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

    onNext(image: Image) {
        if (this.index < this.data.length) {
            this.index = this.index + 1;
        }
        this.imageanimate(image);
    }

    onPrevious(image: Image) {
        if (this.index > 0) {
            this.index = this.index - 1;
        }
        this.imageanimate(image);
    }

    imageanimate(image: Image) {
        image.animate({
            opacity: 0,
            translate: { x: 0, y: 0 },
            delay: 0,
            rotate: 360,
            duration: 1000
        }).then(() => {
            console.log("Animation finished.");
            image.animate({
                opacity: 1,
                translate: { x: 0, y: 0 },
                delay: 0,
                rotate: 360,
                duration: 1000,
                curve: enums.AnimationCurve.easeOut
            })
        }).catch((e) => {
            console.log(e.message);
        });
    }

    labelanimate(label: Label,image:Image) {
        label.animate({
            opacity: 0,
            translate: { x: 0, y: 0 },
            delay: 0,
            rotate: 360,
            duration: 1000
        }).then(() => {
            console.log("Animation finished.");
            label.animate({
                opacity: 1,
                translate: { x: 0, y: 0 },
                delay: 0,
                rotate: 360,
                duration: 1000,
                curve: enums.AnimationCurve.easeOut
            })
            this.onNext(image)
        }).catch((e) => {
            console.log(e.message);
        });
    }
}