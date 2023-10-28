import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { ListOfProductComponent } from './list-of-product.component';
import { ListOfProductRoutingModule } from './list-of-product-routing.module';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { NgModule } from '@angular/core';

@NgModule({
	declarations: [ListOfProductComponent],
	imports: [
		CommonModule,
		ListOfProductRoutingModule,
		MaterialModule,
		FormsModule,
		ReactiveFormsModule,
	],
})
export class ListOfProductModule {}
