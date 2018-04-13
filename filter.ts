/* Code instructions to have a filter.


The following lines are added to YOUR component */
export class MyComponent {

	_listFilter: string;
	
	get listFilter(): string {
		return this._listFilter;
	}
	set listFilter(value:string) {
		this._listFilter = value;
		this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
	}
	
	filteredProducts: IProduct[];

	products: IProduct[] = [
		{
			"id":"1",
			"name":"test1",
			"description":"description1"
		},
		{
			"id":"2",
			"name":"test2",
			"description":"description2"
		}
	];

	constructor() {
		this.filteredProducts = this.products;
		this.listFilter = 'test1';
	}

	performFilter(filteredBy: string): IProduct[] {
	filteredBy = filteredBy.toLocaleLowerCase();
	return this.products.filter((product: IProduct) =>
		product.name.toLocaleLowerCase().indexOf(filteredBy) !== -1);
	}
}



/* Then we nedd create and declarate the object in a new file interface "products.ts" */
export interface IProduct {
	id: string;
	name: string;
	description: string;
}

/* Example to how use the filter on ngFor. To use in your template */
/* Input to filter */
<span>Filter by: </span><input type="text" [(ngModel)]='listFilter' />
/* show string to filter */
<h3>Filtered by: {{listFilter}}</h3>
/* List of filter products */
<li *ngFor="let product of filteredProducts">{{ product.name }}</li>


