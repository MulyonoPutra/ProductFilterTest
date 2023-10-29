import { Component, EventEmitter, Input, Output } from '@angular/core';

import { CommonModule } from '@angular/common';
import { SizeNumber } from 'src/app/core/interfaces/size-number';
import { SizeNumberComponent } from '../size-number/size-number.component';

@Component({
	selector: 'app-list-of-size',
	standalone: true,
	imports: [CommonModule, SizeNumberComponent],
	templateUrl: './list-of-size.component.html',
	styleUrls: ['./list-of-size.component.scss'],
})
export class ListOfSizeComponent {
	@Input() sizeNumbers!: SizeNumber[];
	@Output() selected = new EventEmitter<SizeNumber[]>();

	selectedSize?: SizeNumber;
	selectedSizeNumbers: SizeNumber[] = [];

	onSelect(size: SizeNumber): void {
		const index = this.selectedSizeNumbers.findIndex(
			(s) => s.id === size.id,
		);
		if (index !== -1) {
			this.selectedSizeNumbers.splice(index, 1);
		} else {
			this.selectedSizeNumbers.push(size);
			this.selected.emit(this.selectedSizeNumbers);
		}
	}
}
