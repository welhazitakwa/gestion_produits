import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  constructor(private http: HttpClient) { }
  addCategorie(data: any ) : Observable<any> {
    return this.http.post('http://localhost:8081/categories' , data);
  }
}
