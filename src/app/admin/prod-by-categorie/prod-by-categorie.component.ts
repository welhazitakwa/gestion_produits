import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CategorieService } from 'src/app/services/categorie.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-prod-by-categorie',
  templateUrl: './prod-by-categorie.component.html',
  styleUrls: ['./prod-by-categorie.component.css'],
})
export class ProdByCategorieComponent implements OnInit {
  prodByCat: any[] = [];
  @ViewChild('productTableBody')
  productTableBodyRef!: ElementRef<HTMLTableSectionElement>;
  constructor(
    private shared: SharedService,
    private categorieService: CategorieService
  ) {}
  getData: any[] = [];
  ngOnInit(): void {
    this.prodByCat = this.shared.getMessage();
    console.log(this.prodByCat);
  }
  getProductsOfCateory(id: number) {
    this.categorieService.getProductsOfCategorie(id).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  filterTable(searchText: string) {
    searchText = searchText.toLowerCase().trim();
    const tableBody = this.productTableBodyRef.nativeElement;

    if (tableBody) {
      const rows = tableBody.getElementsByTagName('tr');

      for (let i = 0; i < rows.length; i++) {
        const cells = rows[i].getElementsByTagName('td');
        let showRow = false;

        for (let j = 0; j < cells.length; j++) {
          const cellContent = cells[j].textContent || cells[j].innerText;
          if (cellContent.toLowerCase().indexOf(searchText) > -1) {
            showRow = true;
            break;
          }
        }

        rows[i].style.display = showRow ? '' : 'none';
      }
    }
  }
}
