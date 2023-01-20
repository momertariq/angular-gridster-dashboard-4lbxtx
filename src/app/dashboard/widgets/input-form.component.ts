import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, OnInit, ViewEncapsulation, ChangeDetectorRef } from "@angular/core";
import { Subscription } from "rxjs";
import { WidgetCommunicationService } from "./../services/widget-communication.service";

@Component({
   selector: "app-input-form",
   templateUrl: "./input-form.component.html",
   styleUrls: ["./input-form.component.scss"],
   changeDetection: ChangeDetectionStrategy.OnPush,
   encapsulation: ViewEncapsulation.None
})
export class InputFormComponent implements OnInit, OnDestroy {
  @Input()
  widget;
  @Input()
  resizeEvent: EventEmitter<any>;
  private resizeSub$: Subscription;
  public selectedNomination: any;
  private widgetCommunicationServiceSubscription$: Subscription;

  constructor(
    private ref: ChangeDetectorRef,
    private widgetCommunicationService: WidgetCommunicationService
  ) {}

  ngOnInit() {
    this.resizeSub$ = this.resizeEvent.subscribe((widget) => {
      if (widget === this.widget) {
        console.log(widget);
      }
    });

    this.widgetCommunicationServiceSubscription$ = this.widgetCommunicationService.data.subscribe(newNomination => {
      this.selectedNomination = null;
      if (newNomination) {
        this.selectedNomination = newNomination;
        this.ref.detectChanges();
      }
    });
  }

  ngOnDestroy() {
    this.resizeSub$.unsubscribe();
    this.widgetCommunicationServiceSubscription$.unsubscribe();
  }
}
