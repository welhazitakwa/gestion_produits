import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  intermd : any ;
  idcat : any ;
  constructor() { }
  setMessage (data : any) {
    this.intermd = data;
  }
  getMessage () {
    return this.intermd ;
  }
  setIdcat (data : any) {
    this.idcat = data;
  }
  getIdcat () {
    return this.idcat;
  }
}
