import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Bill } from '../bill';
import { BillServiceService } from '../bill-service.service';

@Component({
  selector: 'app-get-billby-area',
  templateUrl: './get-billby-area.component.html',
  styleUrls: ['./get-billby-area.component.css']
})
export class GetBillbyAreaComponent 
{
  area:any = "";
  consumerList:Bill[] = [];

  setArea() {
    this.consumerList = [];
    this.area = this.areaForm.value.area;
    this.billService.getConsumerBillsByArea(this.area).subscribe(consumerList=>this.consumerList=consumerList);
  }

  areaForm = new FormGroup({
    area : new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]*')])
  });

  constructor(public billService:BillServiceService)
  {
  }

}
