import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListOfProductComponent } from './list-of-product.component';

const routes: Routes = [{ path: '', component: ListOfProductComponent }];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class ListOfProductRoutingModule {}
