/* The next instructions use to add route in your app */
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