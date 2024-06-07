import { Component } from '@angular/core';
import { Router } from 'express';
import { Produit } from '../new-page/new-page.component';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss',
})
export class ProductDetailComponent {
  constructor() {
    this.product = history.state.data;
  }
  product: Produit = {
    id: 1,
    nom: 'iPhone 15 pro',
    marque: 'Apple',
    prix: 1200,
    codeBarre: '1234567890123',
    poid: 194,
    image: 'string',
  };
  formatPrix(prix: number): string {
    return prix.toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' });
  }

  formatPoid(poid: number): string {
    return poid.toLocaleString('fr-FR') + ' g';
  }
}
