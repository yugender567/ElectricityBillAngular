import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Bill } from '../bill';
import { BillServiceService } from '../bill-service.service';

@Component({
  selector: 'app-get-billby-year',
  templateUrl: './get-billby-year.component.html',
  styleUrls: ['./get-billby-year.component.css']
})
export class GetBillbyYearComponent {
  year:any = "";
  month:any = "";
  consumerList:Bill[] = [];

  setYearAndMonth() {
    this.consumerList = [];
    this.year = this.dateForm.value.year;
    this.month = this.dateForm.value.month;
    this.billService.getConsumerBillsByYearAndMonth(this.year, this.month).subscribe(consumerList=>this.consumerList=consumerList);
  }

  dateForm = new FormGroup({
    year : new FormControl('', [Validators.required, Validators.max(2022)]),
    month : new FormControl('', [Validators.required, Validators.max(12), Validators.min(1)])
  });

  constructor(public billService:BillServiceService)
  {
  }
}
