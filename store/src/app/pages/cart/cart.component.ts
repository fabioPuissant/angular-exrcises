import { Component, OnInit } from '@angular/core';
import { Cart, CartItem } from '../../models/cart.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html'
})
export class CartComponent implements OnInit {
  onRemoveFromCart(element: any) {
    this._cartService.clearItemFromCart(element);
  }
  onIncreaseQuantity(item: CartItem) {
    this._cartService.addToCart(item);
  }
  onReduceQuantity(item: CartItem) {
    this._cartService.reduceQuanityFromElement(item);

  }
  onClearCart() {
    this._cartService.clearCart();
  }
  cart: Cart = { items: [] };

  ngOnInit(): void {
    this._cartService.cart.subscribe((_cart) => {
      this.cart = _cart;
      this.dataSource = this.cart.items;
    })
  }

  dataSource: Array<CartItem> = [];
  displayedColumns: Array<string> = [
    'product',
    'name',
    'price',
    'quantity',
    'total',
    'action'
  ];

  constructor(private _cartService: CartService) { }

  getTotal(items: Array<CartItem>): number {
    return this._cartService.getTotal(items);
  }
}
