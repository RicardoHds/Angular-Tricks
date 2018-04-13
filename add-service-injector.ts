/* The following code is to create a servide injector */

/* First create a product-service.ts */
import { Injectable } from '@angular/core';
import { IProduct } from './product';

@Injectable()
export class ProductService {

	getProducts(): IProduct[] {
		return[
			{
		        "productId": 1,
		        "productName": "Leaf Rake",
		        "productCode": "GDN-0011",
		        "releaseDate": "March 19, 2016",
		        "description": "Leaf rake with 48-inch wooden handle.",
		        "price": 19.95,
		        "starRating": 3.2,
		        "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
		    },
		    {
		        "productId": 2,
		        "productName": "Garden Cart",
		        "productCode": "GDN-0023",
		        "releaseDate": "March 18, 2016",
		        "description": "15 gallon capacity rolling garden cart",
		        "price": 32.99,
		        "starRating": 4.2,
		        "imageUrl": "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
		    },
		    {
		        "productId": 5,
		        "productName": "Hammer",
		        "productCode": "TBX-0048",
		        "releaseDate": "May 21, 2016",
		        "description": "Curved claw steel hammer",
		        "price": 8.9,
		        "starRating": 4.8,
		        "imageUrl": "http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
		    }
    ];
	}
	
}


/* Next, we need declarate in app.component.ts */
/* Personal and course code helped */
import { Component } from '@angular/core';
import { ProductService } from "../app/products/product.service";

@Component({
	selector: 'pm-root',
	template: `
		<div><h1>{{pageTitle}}</h1>
			<pm-products></pm-products>
		</div>
		`,
	providers: [ ProductService ]
})
export class AppComponent{
	pageTitle: string = 'Acme Ricardo';
}




/* Next, in product-list.component.ts */
import { Component, OnInit } from '@angular/core';
import { ProductService } from "./product.service";

export class ProductListComponent{
	filteredProducts: IProduct[];

	products: IProduct[] = [];

	constructor(private _productService: ProductService) {

	}

	ngOnInit(): void {
		this.products = this._productService.getProducts();
		this.filteredProducts = this.products;
	}
}