import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeModule } from './demo/home/home.module';
import { HttpGenese } from 'genese-tests';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        HomeModule,

        AppRoutingModule
    ],
    exports: [
        HttpClientModule
    ],
    providers: [HttpGenese],
    bootstrap: [AppComponent]
})
export class AppModule { }
