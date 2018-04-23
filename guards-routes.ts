/* The next code is to create a guard to routes */

/* First, create a service */
ng g s products/product-guard-service -m app.module


/* In product-guard.service.ts */
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';

@Injectable()
export class ProductGuardService implements CanActivate{

  constructor(private _router: Router) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
  	let id = + route.url[1].path;
  	if (isNaN(id) || id < 1 ) {
  		alert("Invalid product ID");
  		this._router.navigate(['/products']);
  		return false;
  	};
  	return true;
  }

}


/* And declarate in the path imports inside app.module canActivate */

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'products', component: ProductListComponent },
      { path: 'products/:id',
        canActivate: [ ProductGuardService ],
        component: ProductDetailComponent },
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full'},
      { path: '**', redirectTo: 'welcome', pathMatch: 'full'}
    ])
  ],
  providers: [ProductGuardService],
  bootstrap: [AppComponent]
})
