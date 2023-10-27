import { Component } from '@angular/core';
import { SIZE_NUMBER } from 'src/app/shared/utils/list-of-size';
import { SizeNumber } from 'src/app/core/interfaces/list-of-size.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  protected max: number = 100;
  protected min: number = 0;

  protected sizeCategories = SIZE_NUMBER;

  protected selectedSize!: SizeNumber;
  protected selectedSizeArray: SizeNumber[] = [];
  protected sizeNumbers!: SizeNumber[];
  protected selectedOptions!: string;

  seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];

  protected onSliderChange() {
    console.log('Min:', this.min);
    console.log('Max:', this.max);
  }

  onSelect(size: SizeNumber) {
    const index = this.selectedSizeArray.findIndex(cat => cat.id === size.id);
    if (index !== -1) {
      this.selectedSizeArray.splice(index, 1);
    } else {
      this.selectedSizeArray.push(size);
    }
  }

  submit(){
    console.log(this.selectedSizeArray)
  }
}
