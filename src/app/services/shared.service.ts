import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  intermd: any;
  idcat: any;
  nomcat: any;
  constructor() {}
  setMessage(data: any) {
    this.intermd = data;
  }
  getMessage() {
    return this.intermd;
  }
  setIdcat(data: any) {
    this.idcat = data;
  }
  getIdcat() {
    return this.idcat;
  }
  setNomcat(data: any) {
    this.nomcat = data;
  }
  getNomcat() {
    return this.nomcat;
  }
}
