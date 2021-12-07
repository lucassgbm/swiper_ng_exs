import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';
import { SwiperModule } from "swiper/angular";

import { AppComponent } from './app.component';
import { SwiperComponent } from './swiper/swiper.component';

@NgModule({
  declarations: [
    AppComponent,
    SwiperComponent
  ],
  imports: [
    BrowserModule, CommonModule, FormsModule, SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
