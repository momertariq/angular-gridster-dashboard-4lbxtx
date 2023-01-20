import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { ButtonsModule } from "@progress/kendo-angular-buttons";
import { GridModule } from "@progress/kendo-angular-grid";
import { ChartsModule } from "@progress/kendo-angular-charts";
import { DropDownsModule } from "@progress/kendo-angular-dropdowns";
import { DialogModule } from "@progress/kendo-angular-dialog";
import { NotificationModule } from "@progress/kendo-angular-notification";
import { DatePickerModule } from "@progress/kendo-angular-dateinputs";
import { PopupModule } from "@progress/kendo-angular-popup";




import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { DashboardModule } from "./dashboard/dashboard.module";
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule, 
    DashboardModule,
    ButtonsModule,
    GridModule,
    ChartsModule,
    DropDownsModule,
    DialogModule,
    NotificationModule,
    DatePickerModule,
    PopupModule ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
