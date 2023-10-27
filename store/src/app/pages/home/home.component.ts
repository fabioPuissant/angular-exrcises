import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { CartService } from '../../services/cart.service';
import { StoreService } from 'src/app/services/store.service';
import { Subscription } from 'rxjs';



const ROWS_HEIGHT: { [id: number]: number } = { 1: 400, 3: 355, 4: 350 } // says it is an object with key 'id' that is a number, the value to which the key maps is a number

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  cols = 3;
  category: string | undefined;
  rowHeight = ROWS_HEIGHT[this.cols]; // this is a nice to know
  products: Array<Product> | undefined;
  sort = 'desc';
  count = '8';
  productSubscription: Subscription | undefined;
  categorySubscription: Subscription | undefined;


  constructor(private cartService: CartService, private storeService: StoreService) { }

  ngOnInit(): void {
    this.getProducts();

  }

  getProducts(): void {
    this.productSubscription = this.storeService.getAllProducts(this.count, this.sort, this.category).subscribe(_products => {
      this.products = _products
    });
  }

  onAddToCart(product: Product) {
    this.cartService.addToCart({
      product: product.image,
      name: product.title,
      price: product.price,
      quantity: 1,
      id: product.id
    })
  }

  onColumnsCountChange(colsNumber: number) {
    if (colsNumber == 1 || colsNumber == 3 || colsNumber == 4) {
      this.cols = colsNumber

      this.rowHeight = ROWS_HEIGHT[this.cols];
    }
  }
  onShowCategory(chosenCategory: string): void {
    this.category = chosenCategory;

    this.getProducts();
  }

  onSortChange(sortReceived: string): void{
    this.sort = sortReceived;
    this.getProducts();
  }

  onItemsCountChange(itemsCountReceived: number): void {
    this.count = itemsCountReceived.toString();
    this.getProducts();
  }
}
