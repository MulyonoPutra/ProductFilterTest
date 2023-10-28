import { Color } from './color';

export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  price: number;
  sizes: string[];
  colors: Color[];
  images: string;
}
