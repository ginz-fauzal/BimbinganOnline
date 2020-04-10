import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptHttpClientModule } from 'nativescript-angular/http-client';
import { ClassComponent } from "./class.component"; // Import all components that will be used in the lazy loaded module
import { ClassRoutingModule } from "./class.routing"; // import the routing module

@NgModule({
    schemas: [NO_ERRORS_SCHEMA],
    imports: [
        NativeScriptCommonModule,
        ClassRoutingModule,
        NativeScriptFormsModule,
        NativeScriptHttpClientModule
    ],
    declarations: [ClassComponent], // declare all components that will be used within the module
    providers: [] // provide all services that will be used within the module
})
export class ClassModule { }