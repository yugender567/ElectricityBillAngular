import { Component } from '@angular/core';
import { Bill } from '../bill';
import { BillServiceService } from '../bill-service.service';

@Component({
  selector: 'app-get-all-bill',
  templateUrl: './get-all-bill.component.html',
  styleUrls: ['./get-all-bill.component.css']
})
export class GetAllBillComponent {

  consumerList:Bill[] = [];
  constructor(public billService:BillServiceService)
  {
    this.billService.getAllConsumerBills().subscribe(consumerList=>this.consumerList=consumerList);
  }

}
