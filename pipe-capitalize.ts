/* The following lines are to create a capitalize pipe */

/* First, create a capitalize.pipe.ts file */
import {Pipe, PipeTransform} from "@angular/core";

@Pipe({name: 'capitalize'})
export class CapitalizePipe implements PipeTransform {

    transform(value:any) {
        if (value) {
            return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
        }
        return value;
    }

}

/* Second: declarate an import in our app.module.ts */
import {CapitalizePipe} from "./capitalize.pipe";
@NgModule({
  declarations: [
    AppComponent,
    [CapitalizePipe]
  ]
})
export class AppModule { }


/* How to use capitalize pipe */
<li>{{ product.name | capitalize }}</li>
