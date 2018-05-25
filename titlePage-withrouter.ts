/*
How to add title page when use routing module.
*/

/* 1. In app.component or other component integrar eh next constructor and getTitle function.
We need import Title, Routes and others comps. */ 
import { Title } from '@angular/platform-browser';
import { Routes, RouterModule, Router, ActivatedRoute, NavigationEnd } from '@angular/router';

export class AppComponent {
  title = 'app';

  constructor(titleService: Title, router: Router, activatedRoute: ActivatedRoute) {
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const title = this.getTitle(router.routerState, router.routerState.root).join('-');
        titleService.setTitle(title);
      }
    });
  }

  // collect that title data properties from all child routes
  // there might be a better way but this worked for me
  getTitle(state, parent) {
    const data = [];
    if (parent && parent.snapshot.data && parent.snapshot.data.title) {
      data.push(parent.snapshot.data.title);
    }

    if (state && parent) {
      data.push(... this.getTitle(state, state.firstChild(parent)));
    }
    return data;
  }

}


/* 2. To set every title in paths. */
import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './sitemap/about.component';


const routes: Routes = [
    { path: '', component: HomeComponent, data: { title: 'Home' }  },
    { path: 'about', component: AboutComponent, data: { title: 'About Us' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

  }