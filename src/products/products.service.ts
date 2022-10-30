import { Injectable } from '@nestjs/common';

import { Product } from './product.model';

@Injectable()
export class ProductsService {
  products: Product[] = [];
  insertProduct(title: string, description: string, price: number): string {
    const p = new Product(new Date().toString(), title, description, price);
    this.products.push(p);
    return p.id;
  }
}
