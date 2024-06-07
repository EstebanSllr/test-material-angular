import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailComponent } from './product-detail.component';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [ProductDetailComponent],
  imports: [
    CommonModule, MatCardModule
  ],
  exports: [ProductDetailComponent]
})
export class ProductDetailModule { }
