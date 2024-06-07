import { CommonModule } from '@angular/common';
import { NewPageComponent } from './new-page.component';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [NewPageComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatIconModule,
    MatMenuModule
  ],
  exports: [NewPageComponent],
})
export class NewPageModule {}
