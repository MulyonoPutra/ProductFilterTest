import { Component, EventEmitter, Input, Output } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchDirective } from '../../directives/search.directive';

@Component({
	selector: 'app-search-form',
	standalone: true,
	imports: [CommonModule, FormsModule, SearchDirective],
	templateUrl: './search-form.component.html',
	styleUrls: ['./search-form.component.scss'],
})
export class SearchFormComponent {
	@Input() query!: string;
	@Output() search = new EventEmitter<any>();

	onSearch($event: any): void {
		this.search.emit($event);
	}
}
