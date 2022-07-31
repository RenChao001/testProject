import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DateService } from 'src/app/service/dateService';

import { ClientComponent } from './client.component';
import { DatePipe } from '@angular/common';

describe('ClientComponent', () => {
  let component: ClientComponent;
  let fixture: ComponentFixture<ClientComponent>;
  let service: DateService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientComponent ],
      providers: [ DateService, DatePipe ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.inject(DateService);
  });

  it('component created', () => {
    expect(component).toBeTruthy();
  });

  it('service created', () => {
    expect(service).toBeTruthy();
  });

  it('service data', () => {
    service.getTimeString(new Date());
    expect(service.time.length).toBeGreaterThan(0);
    expect(component.dispMsgByTime(service.time)).not.toBeUndefined;
    expect(component.dispMsgByTime(service.time).length).toBeGreaterThan(0);
  });
});
