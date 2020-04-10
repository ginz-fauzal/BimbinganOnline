import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { ClassComponent } from "./class.component";

export const routes: Routes = [
    {
        path: "",
        component: ClassComponent
    }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],  // set the lazy loaded routes using forChild
    exports: [NativeScriptRouterModule]
})
export class ClassRoutingModule { }