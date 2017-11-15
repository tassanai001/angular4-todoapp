import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Optional, Inject } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FormComponetComponent } from './form-componet/form-componet.component';
import { TableComponetComponent } from './table-componet/table-componet.component';
import { JSONServiceService } from './json-service.service';


@NgModule({
  declarations: [
    AppComponent,
    FormComponetComponent,
    TableComponetComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [JSONServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
