import { Injectable } from "@angular/core";
import { DatePipe } from "@angular/common";

@Injectable ()
export class DateService {

  public time: string = "";

  constructor(private datePipe: DatePipe) {

  }

  public getTimeString(date: Date): void {
    if (date == null) {
      this.time = '';
    }
    let timezone = this.datePipe.transform(new Date(), 'z') || "";
    let timeString = this.datePipe.transform(date, "HHmmss", timezone);
    this.time = timeString || '';
  }

}
