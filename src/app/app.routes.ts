import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewPageComponent } from './new-page/new-page.component';
import { MonComposantComponent } from './mon-composant/mon-composant.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

const routes: Routes = [
  { path: '', component: MonComposantComponent }, // Route par défaut
  { path: 'new-page', component: NewPageComponent }, // Route pour la nouvelle page
  { path: 'new-page/:productId', component: ProductDetailComponent } // Route pour la nouvelle page

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export { routes }; // Exportez la variable routes
