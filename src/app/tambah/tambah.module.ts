import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptHttpClientModule } from 'nativescript-angular/http-client';
import { TambahComponent } from "./Tambah.component"; // Import all components that will be used in the lazy loaded module
import { TambahRoutingModule } from "./Tambah.routing"; // import the routing module

@NgModule({
    schemas: [NO_ERRORS_SCHEMA],
    imports: [
        NativeScriptCommonModule,
        TambahRoutingModule,
        NativeScriptFormsModule,
        NativeScriptHttpClientModule
    ],
    declarations: [TambahComponent], // declare all components that will be used within the module
    providers: [] // provide all services that will be used within the module
})
export class TambahModule { }