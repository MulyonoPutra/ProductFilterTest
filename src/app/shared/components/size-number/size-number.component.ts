import { Component, EventEmitter, Input, Output } from '@angular/core';

import { CommonModule } from '@angular/common';
import { SizeNumber } from 'src/app/core/interfaces/list-of-size.interface';

@Component({
  selector: 'app-size-number',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './size-number.component.html',
  styleUrls: ['./size-number.component.scss'],
})
export class SizeNumberComponent {

  @Input() size!: SizeNumber;
  @Input() isSelected = false;

  @Output() selected = new EventEmitter();

  onSelect() {
    this.isSelected = !this.isSelected;
    this.selected.emit(this.isSelected);
  }
}
