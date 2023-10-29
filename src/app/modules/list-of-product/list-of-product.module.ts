import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { ListOfProductComponent } from './list-of-product.component';
import { ListOfProductRoutingModule } from './list-of-product-routing.module';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { NgModule } from '@angular/core';
import { SearchDirective } from 'src/app/shared/directives/search.directive';

@NgModule({
	declarations: [ListOfProductComponent],
	imports: [
		CommonModule,
		ListOfProductRoutingModule,
		MaterialModule,
		ComponentsModule,
		FormsModule,
		ReactiveFormsModule,
		SearchDirective,
	],
})
export class ListOfProductModule {}
