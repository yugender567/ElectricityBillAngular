import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Bill } from '../bill';
import { BillServiceService } from '../bill-service.service';

@Component({
  selector: 'app-insert-bill',
  templateUrl: './insert-bill.component.html',
  styleUrls: ['./insert-bill.component.css']
})
export class InsertBillComponent {

  setBill() {
    this.insertBill.year = this.billForm.value.year;
    this.insertBill.month = this.billForm.value.month;
    this.insertBill.consumer.consumerId = this.billForm.value.consumerId;
    this.insertBill.unitsConsumed = this.billForm.value.unitsConsumed;


    console.log(this.insertBill);
    this.billService.addBill(this.insertBill).subscribe();
  }

  billForm = new FormGroup({
    year : new FormControl('', [Validators.required, Validators.max(2022)]),
    month : new FormControl('', [Validators.required, Validators.max(12), Validators.min(1)]),
    unitsConsumed : new FormControl('', [Validators.required, Validators.max(2022)]),
    consumerId : new FormControl('', [Validators.required, Validators.pattern('[0-9]*')]),

  });

  insertConsumer:any = {consumerId:this.billForm.value.consumerId, consumerName:null, city:null, area:null, password:null,
    email:null, planType:{rateId:null, planName:null, price:null, consumers:[]}, bills:[], admin:false};

  insertBill: any = { billId:null, year:this.billForm.value.year, month:this.billForm.value.month, 
    unitsConsumed:this.billForm.value.unitsConsumed, totalBill:null, consumer:this.insertConsumer};



  constructor(public billService:BillServiceService)
  {
  }
}
