import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Bill } from '../bill';
import { BillServiceService } from '../bill-service.service';

@Component({
  selector: 'app-get-billby-city',
  templateUrl: './get-billby-city.component.html',
  styleUrls: ['./get-billby-city.component.css']
})
export class GetBillbyCityComponent {
  city:any = "";
  consumerList:Bill[] = [];

  setCity() {
    this.consumerList = [];
    this.city = this.cityForm.value.city;
    this.billService.getConsumerBillsByCity(this.city).subscribe(consumerList=>this.consumerList=consumerList);
  }

  cityForm = new FormGroup({
    city : new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]*')])
  });

  constructor(public billService:BillServiceService)
  {
  }
}
