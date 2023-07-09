import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HowToShowAndReadDataFromDropDownListComponent } from './how-to-show-and-read-data-from-drop-down-list/how-to-show-and-read-data-from-drop-down-list.component';
import { HttpClientModule } from '@angular/common/http';
import { HowToTakeFileAsInputComponent } from './how-to-take-file-as-input/how-to-take-file-as-input.component';

@NgModule({
  declarations: [
    AppComponent,
    HowToShowAndReadDataFromDropDownListComponent,
    HowToTakeFileAsInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
