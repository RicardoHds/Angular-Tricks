/* The following we use  to show or hide image or an element */

/* First, we need create a following function in OUR component */
export class ProductListComponent {
	imageWidth: number = 50;
	imageMargin: number = 2;
	showImage: boolean = false;

	toggleImage(): void {
		this.showImage = !this.showImage;
}
}


/* How to use */

/* Directive (click)="myFunction() */
/* If exist showImge the button display "Hide Image"
Or if not exist the button display "Show Image" */
<button (click)="toggleImage()">
	{{showImage ? 'Hide' : 'Show'}} Image
</button>

/* In the image we use *ngIf to show and hide image */
<img
*ngIf='showImage' 
[src]="product.imageUrl" 
[title]="product.productName" 
[style.width.px]="imageWidth" 
[style.margin.px]="imageMargin"
>