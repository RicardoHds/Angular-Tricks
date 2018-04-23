/* 
1. The next instructions use to add route in your app.
2. To send var to component detail.
3. To create a button with back to list products or back to component parent.
*/
/* Configuring Routes
- Define the base element
- Add RouterModule
	- Add each route (RouterModule.forRoot)
	- order matter
- path: Url segment for the route
	- No leading slash
	- " for default route
	- '**' for wildcard route
- component
	- Not string name: no enclosed in quotes	
*/



/* import RouterModule and imports in the app.module.ts */
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    /* Declarate the paths */
    RouterModule.forRoot([
      { path: 'products', component: ProductListComponent },
      { path: 'products/:id', component: ProductDetailComponent },
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full'},
      { path: '**', redirectTo: 'welcome', pathMatch: 'full'}
    ])
  ]
})
export class AppModule { }


/* Next. If you make a menu in app.component.ts, you can use the next line and remove selector from YOUR component 
IMPORTANT: declarate <router-outlet></router-outlet> to load components */
import { Component } from '@angular/core';
import { ProductService } from "../app/products/product.service";

@Component({
	selector: 'pm-root',
	template: `
		<nav class='navbar navbar-default'>
			<div class='container-fluid'>
				<a class='navbar-brand'>{{ pageTitle }}</a>
				<ul class='nav navbar-nav'>
					<li><a [routerLink]="['/welcome']">Home</a></li>
					<li><a [routerLink]="['/products']">Product List</a></li>
				</ul>
			</div>
		</nav>
		<div class='container'>
			<router-outlet></router-outlet>
		</div>
		`,
	providers: [ ProductService ]
})
export class AppComponent{
	pageTitle: string = 'Acme Ricardo';
}










/* ------------------------
To get a var from router, in this example is product/:id
*/

/* To send from component to detail component. In OUR component parent */
<a [routerLink]="['/products', product.productId]">{{ product.productName }}</a>

/* 
In product-detail.component.ts

To get our id:
Needs import ActivatedRoute. 
Create constructor route ActivatedRoute and define ngOnInit. 

To back:
Need import Router.
Create constructor route Router and define onBack.
 */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from './product';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
	pageTitle: string = 'Product Detail';
	product: IProduct;

  constructor(private _route: ActivatedRoute,
  				private _router: Router) { }

  ngOnInit() {
  	let id = +this._route.snapshot.paramMap.get('id');
  	this.pageTitle += `: ${id}`;
  	this.product = {
  		"productId": id,
        "productName": "Leaf Rake",
        "productCode": "GDN-0011",
        "releaseDate": "March 19, 2016",
        "description": "Leaf rake with 48-inch wooden handle.",
        "price": 19.95,
        "starRating": 3.2,
        "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
  	}
  }

  onBack(): void {
  	this._router.navigate(['/products']);
  }

}




/* To show the detail information in product-detail.component.html 
And to create button to back */
<div class="panel panel-primary" *ngIf='product'>
	<div class="panel-heading">
		<p>
		  {{ pageTitle + ": " + product.productName }}
		</p>
	</div>
	<div class="panel-footer">
		<a class="btn btn-default" (click)='onBack()' style="width: 80px">
			<i class="glyphicon glyphicon-chevron-left"></i> Back
		</a>
	</div>
</div>