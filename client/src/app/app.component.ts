import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IPagination } from './shared/models/pagination';
import { IProduct } from './shared/models/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Skinet';
  products: IProduct[];

  constructor(private http: HttpClient) {
    this.products = [];
  }

  ngOnInit(): void {
    this.http
      .get<IPagination>('https://localhost:5001/api/products?pageSize=50')
      .subscribe(
        (response) => {
          console.log(`response`, response);
          this.products = response.data;
        },
        (error) => console.error(error)
      );
  }
}