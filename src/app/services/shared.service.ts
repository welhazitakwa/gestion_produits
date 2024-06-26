import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  intermd : any ;
  constructor() { }
  setMessage (data : any) {
    this.intermd = data;
  }
  getMessage () {
    return this.intermd ;
  }
}
