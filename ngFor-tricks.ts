/* To acces to frist or last child in for loop */
*ngFor="let objetive of objetives; let last = last;" 
	[class.padding-sm10]="last"

*ngFor="let objetive of objetives; let first = first;" 
	[class.padding-sm10]="first"