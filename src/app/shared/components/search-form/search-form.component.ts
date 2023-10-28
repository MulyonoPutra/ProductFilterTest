import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
	selector: 'app-search-form',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './search-form.component.html',
	styleUrls: ['./search-form.component.scss'],
})
export class SearchFormComponent {}
