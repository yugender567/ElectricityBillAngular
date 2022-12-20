import { Consumer } from "./consumer";

export class Bill 
{
    billId !: number;
    year!: number;
    month !: number;
    unitsConsumed !: number;
    totalBill !: number;
    consumer !: Consumer;
}
