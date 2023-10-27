import { Component } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-list-of-product',
  templateUrl: './list-of-product.component.html',
  styleUrls: ['./list-of-product.component.scss'],
})
export class ListOfProductComponent {
  panelOpenState = false;
  disabled = false;
  max = 100;
  min = 0;
  showTicks = false;
  step = 1;
  thumbLabel = false;
  value = 0;

  opened() {
    this.panelOpenState = !this.panelOpenState;
  }

  onSliderChange() {
    timer(1000).subscribe((value: number) => {
      console.log(value);

      console.log('Min:', this.min);
      console.log('Max:', this.max);
    });
  }
}
