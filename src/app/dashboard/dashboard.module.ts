// tslint:disable:max-line-length

import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { DynamicModule } from "ng-dynamic-component";
import { GridsterModule } from "angular-gridster2";
import { DashboardComponent } from "./dashboard.component";
import { KendoComponent } from "./widgets/kendo.component";
import { InputFormComponent } from "./widgets/input-form.component";
import { BarChartComponent } from "./widgets/bar-chart.component";
import { DashboardService } from "./services/dashboard.service";
import { WidgetCommunicationService } from "./services/widget-communication.service";

import { ButtonsModule } from "@progress/kendo-angular-buttons";
import { GridModule } from "@progress/kendo-angular-grid";
import { ChartsModule } from "@progress/kendo-angular-charts";
import { DropDownsModule } from "@progress/kendo-angular-dropdowns";
import { DialogModule } from "@progress/kendo-angular-dialog";
import { NotificationModule } from "@progress/kendo-angular-notification";
import { DatePickerModule } from "@progress/kendo-angular-dateinputs";
import { PopupModule } from "@progress/kendo-angular-popup";

// tslint:enable:max-line-length

@NgModule({
  imports: [
    ButtonsModule,
    GridModule,
    ChartsModule,
    DropDownsModule,
    DialogModule,
    NotificationModule,
    DatePickerModule,
    PopupModule,
    CommonModule,
    FormsModule,
    GridsterModule,
    DynamicModule.withComponents([KendoComponent, InputFormComponent, BarChartComponent])
  ],
  declarations: [
    DashboardComponent,
    KendoComponent,
    InputFormComponent,
    BarChartComponent
  ],
  exports: [
    DashboardComponent,
    KendoComponent,
    InputFormComponent,
    BarChartComponent
  ],
  providers: [
    DashboardService,
    WidgetCommunicationService
  ]
})
export class DashboardModule { }
