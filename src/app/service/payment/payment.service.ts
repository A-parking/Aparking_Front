import { Injectable } from '@angular/core';
import { BaseService } from '../base/base.service';
import { HttpClient } from '@angular/common/http';
import {CarData} from '../../model/cardata';

@Injectable({
    providedIn: 'root'
  })
  export class PaymentService extends BaseService {
  
    constructor(http: HttpClient) {
      super(http);
    }
    
    getCarData(s: string): Promise<CarData> {
      console.log({state_number: s});
      return this.post(`http://192.168.1.246:8000/getCarData/`, {state_number: s});
    }

    payment(aaa: number): Promise<any> {
      console.log(aaa);
      console.log({ida: aaa});
      let a = {ida: aaa};
      return this.post(`http://192.168.1.246:8000/deleteCarData/`, a);
    }

}
  