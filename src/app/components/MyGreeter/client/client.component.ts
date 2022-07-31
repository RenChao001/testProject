import { Component, OnInit } from '@angular/core';
import { DateService } from 'src/app/service/dateService';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  message: string = '';

  constructor(private dateService: DateService) { }

  ngOnInit(): void {
    this.dateService.getTimeString(new Date());
    this.message = this.dispMsgByTime(this.dateService.time);
  }

  dispMsgByTime(date: string): string {
    let dateNum = Number.parseInt(date);
    if (dateNum >= 60000 && dateNum < 120000)
      return 'Good morning';
    else if (dateNum >= 120000 && dateNum < 180000)
      return 'Good afternoon';
    else {
      return 'Good evening';
    }
  }
}
