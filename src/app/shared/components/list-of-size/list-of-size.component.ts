import { Component, Input } from '@angular/core';

import { CommonModule } from '@angular/common';
import { SizeNumber } from 'src/app/core/interfaces/list-of-size.interface';
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

  selectedSize?: SizeNumber;
  selectedSizeNumbers: SizeNumber[] = [];

  onSelect(size: SizeNumber) {
    const index = this.selectedSizeNumbers.findIndex((s) => s.id === size.id);
    if (index !== -1) {
      this.selectedSizeNumbers.splice(index, 1);
    } else {
      this.selectedSizeNumbers.push(size);
    }
  }

  submit() {
    console.log(this.selectedSizeNumbers);
  }
}
