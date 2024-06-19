import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProduitService {
  constructor(private http: HttpClient) {}
  addProduit(data: any): Observable<any> {
    return this.http.post('http://localhost:8081/produits', data);
  }
  editProduit(id: number, data: any): Observable<any> {
    return this.http.put(`http://localhost:8081/produit/${id}`, data);
  }
  getProduits(): Observable<any> {
    return this.http.get('http://localhost:8081/produits');
  }

  deleteProduit(id: number): Observable<any> {
    return this.http.delete(`http://localhost:8081/produit/${id}`);
  }
}
