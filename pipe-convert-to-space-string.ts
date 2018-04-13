/* The following code is to change a character o convert to space */


/* First we need create convert-to-space.pipe.ts in shared folder */
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'convertToSpaces'
})

export class ConvertToSpacesPipe implements PipeTransform {
	
	transform(value: string, character: string): string {
		return value.replace(character, ' ');
	}

}



/* Second we need delarate and import in app.module.ts */
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ConvertToSpacesPipe
  ]
})




/* How to use the converttospace personal pipe 
convertToSpaces: 'chracter to convert'*/
<td>{{ product.productCode | lowercase | convertToSpaces: '-' }}</td>