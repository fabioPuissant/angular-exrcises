import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {Product} from '../../../../models/product.model';


@Component({
  selector: 'app-product-box',
  templateUrl: './product-box.component.html'
})

export class ProductBoxComponent implements OnInit{
  @Input() product!: Product;
  @Input() fullWidthMode:boolean = false;
  @Output('addToCartEvent')
  addToCartEmitter = new EventEmitter<Product>();

  constructor() {}

  // undefined while api is still fetching data...
  // product: Product|undefined = {
  //   id: 1,
  //   title: 'Snickers', 
  //   price: 150,
  //   category: 'shoes',
  //   description: 'Description',
  //   image: 'https://via.placeholder.com/150'
  // }

  ngOnInit(): void {

  }

  

  onAddToCart():void {
    this.addToCartEmitter.emit(this.product);
  }

}
