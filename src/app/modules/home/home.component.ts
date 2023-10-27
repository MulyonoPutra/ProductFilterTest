import { Component, OnInit } from '@angular/core';

import { MatRadioChange } from '@angular/material/radio';
import { ProductService } from 'src/app/core/services/product.service';
import { SIZE_NUMBER } from 'src/app/shared/utils/list-of-size';
import { SizeNumber } from 'src/app/core/interfaces/list-of-size.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  protected max: number = 100;
  protected min: number = 0;
  protected categories!: string[];
  protected sizeCategories = SIZE_NUMBER;

  protected selectedSize!: SizeNumber;
  protected selectedSizeArray: SizeNumber[] = [];
  protected sizeNumbers!: SizeNumber[];
  protected selectedOptions!: string;

  protected radioValue!: string;

  constructor(private readonly productService: ProductService) { }

  ngOnInit(): void {
    this.findCategories()
  }

  onRadioButtonChange(event: MatRadioChange): void {
    this.radioValue = event.value;
  }

  findAll(): void {
    this.productService.findAll().subscribe(data => {
      console.log(data);
    })
  }

  findCategories(): void {
    this.productService.getAllCategories().subscribe(
      {
        next: (data: string[]) => {
          this.categories = data;
        }
      }
    )
  }

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
    console.log({
      category: this.radioValue,
      range: {
        min: this.min,
        max: this.max
      },
      // TODO: pass data after choose size number from list-of-size and send to home component
      size: []
    })
  }
}
