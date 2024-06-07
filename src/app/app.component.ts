import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MonComposantModule } from './mon-composant/mon-composant.module';
import { NewPageModule } from './new-page/new-page.module';
import { ProductDetailModule } from './product-detail/product-detail.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, MonComposantModule, NewPageModule, ProductDetailModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-material-app';
}

