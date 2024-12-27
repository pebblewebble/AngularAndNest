import { NgModule } from "@angular/core";
import {FormsModule} from "@angular/forms";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { provideHttpClient } from '@angular/common/http';

@NgModule({
    imports:[FormsModule, BrowserModule],
    declarations:[AppComponent],
    bootstrap:[AppComponent],
    providers:[
        provideHttpClient()
    ]
})
export class AppModule{}