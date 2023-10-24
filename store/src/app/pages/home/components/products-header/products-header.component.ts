import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl: './products-header.component.html'
})
export class ProductsHeaderComponent {
  @Output('columnsCountEvent') columnsCountEmitter = new EventEmitter<number>();
  sort: string = 'desc';
  DESC: OrderProductStyle = OrderProductStyle.DESC;
  ASC: OrderProductStyle = OrderProductStyle.ASC;
  itemsShowCount = 12;

  UpdateOrderBy(orderBy: OrderProductStyle) {
      this.sort = orderBy === OrderProductStyle.DESC? 'desc': 'asc';
  }

  onItemsUpdate(count: number): void {
      this.itemsShowCount = count;
  }

  onColumnsUpdated(colsNum: number): void {
    this.columnsCountEmitter.emit(colsNum);
  }

}
enum OrderProductStyle {
  DESC,
  ASC
}