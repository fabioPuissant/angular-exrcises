import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html'
})
export class FiltersComponent implements OnInit, OnDestroy {
  @Output() showCategory = new EventEmitter<string>();
  categories: Array<string> | undefined;
  categoriesSubscription: Subscription| undefined;
  selectedCategory: string | undefined;
  constructor(private storeService: StoreService ) {}

  ngOnInit(): void {
    this.categoriesSubscription = this.storeService.getAllCategories().subscribe(resp=> this.categories = resp);
  }

  ngOnDestroy(): void {
    if(this.categoriesSubscription){
      this.categoriesSubscription.unsubscribe();
    }
  }


  onNgModelChange(event:any) {
    this.selectedCategory? this.showCategory.emit(this.selectedCategory) : this.showCategory.emit('');
  }
}
