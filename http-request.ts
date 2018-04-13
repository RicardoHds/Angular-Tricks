/* How to create a HTTP request. show and filtered */


/* First, in app.module.ts declarate the following */


import { HttpClientModule } from '@angular/common/http';
@NgModule({
  imports: [
    HttpClientModule
  ]
}



/* Next, in product.service.ts add: */
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

import { IProduct } from './product';

@Injectable()
export class ProductService {
	private _productUrl = './api/products/products.json';
	
	constructor(private _http: HttpClient) {}

	getProducts(): Observable<IProduct[]> {
		return this._http.get<IProduct[]>(this._productUrl)
		.do(data => console.log('All: ' + JSON.stringify(data)))
		.catch(this.handleError);
	}

	private handleError(err: HttpErrorResponse) {
		console.log(err.message);
		return Observable.throw(err.message);
	}

}





/* In product-list.component.ts */
import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from "./product.service";


export class ProductListComponent{
	errorMessage: string;
	_listFilter: string;
	get listFilter(): string {
		return this._listFilter;
	}
	set listFilter(value:string) {
		this._listFilter = value;
		this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
	}

	filteredProducts: IProduct[];

	products: IProduct[] = [];

	constructor(private _productService: ProductService) {

	}

	performFilter(filteredBy: string): IProduct[] {
		filteredBy = filteredBy.toLocaleLowerCase();
		return this.products.filter((product: IProduct) =>
			product.productName.toLocaleLowerCase().indexOf(filteredBy) !== -1);
	}

	ngOnInit(): void {
			this._productService.getProducts()
				.subscribe(products => {
					this.products = products;
					this.filteredProducts = this.products;
				},
					error => this.errorMessage = <any>error);
		}
}