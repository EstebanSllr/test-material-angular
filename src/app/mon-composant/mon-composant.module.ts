import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MonComposantComponent, Voiture } from './mon-composant.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [MonComposantComponent],
  imports: [CommonModule, MatButtonModule, MatCardModule, MatTableModule,MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule],
  exports: [MonComposantComponent],
})
export class MonComposantModule {}

