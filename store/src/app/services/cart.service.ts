import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cart, CartItem } from '../models/cart.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart = new BehaviorSubject<Cart>({ items: [] }); // BehaviorSubject sends updates to its subsribres once its updated!
  constructor(private _snackBar: MatSnackBar) {
  }

  addToCart(item: CartItem): void {
    const items = [...this.cart.value.items];
    const itemInCart = items.find((_item) => _item.id === item.id);

    if (itemInCart) {
      itemInCart.quantity++;
    } else {
      items.push(item);
    }

    this.cart.next({ items });
    this._snackBar.open('1 item added to cart.', 'Ok', { duration: 3000 });
  }

  getTotal(items: Array<CartItem>): number {
    return items.map(i => i.price * i.quantity).reduce((prev, curr) => prev + curr, 0);
  }

  clearCart(): void {
    this.cart.next({ items: [] });
    this._snackBar.open('Cart is cleared', 'Ok', { duration: 3000 });
  }

  clearItemFromCart(item: CartItem) {
    const items = this.cart.value.items.filter(i=> i.id != item.id);
    this.cart.next({items});
    this._snackBar.open('Item removed from the cart.', 'Ok', { duration: 3000 });

  }

  reduceQuanityFromElement(item: CartItem) {
    const items = [...this.cart.value.items];
    const itemFound = items.find((i) => i.id === item.id);
    if (itemFound && itemFound.quantity>1) {
      itemFound.quantity--;
      this.cart.next({ items })
      this._snackBar.open('Reduced item from the cart.', 'Ok', { duration: 3000 });
    }
    else if(itemFound && itemFound.quantity ==1) {
      this.clearItemFromCart(item);
    }

  }
}
