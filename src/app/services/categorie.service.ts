import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategorieService {
  constructor(private http: HttpClient) {}
  addCategorie(data: any): Observable<any> {
    return this.http.post('http://localhost:8081/categories', data);
  }
  editCategorie(id: number, data: any): Observable<any> {
    return this.http.put(`http://localhost:8081/categorie/${id}`, data);
  }
  getCategories(): Observable<any> {
    return this.http.get('http://localhost:8081/categories');
  }
  getProductsOfCategorie(id: number): Observable<any> {
    return this.http.post(`http://localhost:8081/findById/`, id);
  }

  deleteCategorie(id: number): Observable<any> {
    return this.http.delete(`http://localhost:8081/categorie/${id}`);
  }
}
