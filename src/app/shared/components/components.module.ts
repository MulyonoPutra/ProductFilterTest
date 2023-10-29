import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { CardProductComponent } from './card-product/card-product.component';
import { CommonModule } from '@angular/common';
import { ListOfSizeComponent } from './list-of-size/list-of-size.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { SizeNumberComponent } from './size-number/size-number.component';

@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		CardProductComponent,
		SizeNumberComponent,
		SearchFormComponent,
		ListOfSizeComponent,
	],
	exports: [
		CardProductComponent,
		SizeNumberComponent,
		SearchFormComponent,
		ListOfSizeComponent,
	],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentsModule {}
