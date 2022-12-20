import { Rate } from "./rate";
import { Bill } from "./bill";

export class Consumer 
{
    consumerId !: number;
    consumerName!: string;
    city !: string;
    area !: string;
    password !: string;
    email !: string;

    planType !: Rate;
    admin !: boolean;





    constructor() {}

}
