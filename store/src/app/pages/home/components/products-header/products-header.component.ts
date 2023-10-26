import { Component, EventEmitter, Output } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-products-header',
  templateUrl: './products-header.component.html'
})
export class ProductsHeaderComponent {
  @Output('columnsCountEvent') columnsCountEmitter = new EventEmitter<number>();
  @Output('itemsCountEvent') itemsCountEmitter = new EventEmitter<number>();
  @Output('sortEvent') sortEmitter = new EventEmitter<string>();
  sort: string = 'desc';
  DESC: OrderProductStyle = OrderProductStyle.DESC;
  ASC: OrderProductStyle = OrderProductStyle.ASC;
  itemsShowCount = 8;

  constructor(private storeService: StoreService) { }

  UpdateOrderBy(orderBy: OrderProductStyle) {
    this.sort = orderBy === OrderProductStyle.DESC ? 'desc' : 'asc';
    this.sortEmitter.emit(this.sort);
  }

  onItemsUpdate(count: number): void {
    this.itemsShowCount = count;
    this.itemsCountEmitter.emit(this.itemsShowCount);
  }

  onColumnsUpdated(colsNum: number): void {
    this.columnsCountEmitter.emit(colsNum);
  }

}
enum OrderProductStyle {
  DESC,
  ASC
}