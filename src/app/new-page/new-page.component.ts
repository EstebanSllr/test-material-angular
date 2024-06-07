import { Component } from '@angular/core';
import { Router } from '@angular/router';

export interface Produit {
  id: number;
  nom: string;
  marque: string;
  prix: number;
  codeBarre: string;
  poid: number;
  image: string;
  isArchive?: boolean; 
}

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styleUrls: ['./new-page.component.scss']
})
export class NewPageComponent {
  produits: Produit[] = [
    {
      id: 1,
      nom: 'iPhone 15 pro',
      marque: 'Apple',
      prix: 1200,
      codeBarre: '1234567890123',
      poid: 194,
      image: 'https://boulanger.scene7.com/is/image/Boulanger/0195949048791_h_f_l_0?wid=500&hei=500'
    },
    {
      id: 2,
      nom: 'Galaxy S23',
      marque: 'Samsung',
      prix: 1000,
      codeBarre: '2345678901234',
      poid: 168,
      image: 'https://files.refurbed.com/ii/samsung-galaxy-s23-ultra-1678094170.jpg'
    },
    {
      id: 3,
      nom: 'PlayStation 5',
      marque: 'Sony',
      prix: 500,
      codeBarre: '3456789012345',
      poid: 4500,
      image: 'https://m.media-amazon.com/images/I/51QnZ0TtL2L.jpg'
    },
    {
      id: 4,
      nom: 'Surface Pro 9',
      marque: 'Microsoft',
      prix: 1500,
      codeBarre: '4567890123456',
      poid: 800,
      image: 'https://cdn.dxomark.com/wp-content/uploads/medias/post-151145/Microsoft-Surface-Pro-9-_featured-image-packshot-review.jpg'
    },
    {
      id: 5,
      nom: 'Kindle Paperwhite',
      marque: 'Amazon',
      prix: 150,
      codeBarre: '5678901234567',
      poid: 205,
      image: 'https://m.media-amazon.com/images/I/414ivZi+ZkL._AC_.jpg'
    },
    {
      id: 6,
      nom: 'Echo Dot (5e Gen)',
      marque: 'Amazon',
      prix: 50,
      codeBarre: '6789012345678',
      poid: 338,
      image: 'https://pricespy-75b8.kxcdn.com/product/standard/280/7135425.jpg'
    },
  ];

  displayedColumns: string[] = ['nom', 'marque', 'prix', 'codeBarre', 'poid', 'action'];

  constructor(private router: Router) {}

  formatPrix(prix: number): string {
    return prix.toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' });
  }

  formatPoid(poid: number): string {
    return poid.toLocaleString('fr-FR') + ' g';
  }

  navigateToDetail(id: number) {
    this.router.navigate(['/new-page', id], { state: { data: this.produits.find(prod => prod.id === id) } });
  }

  goToMonComposant() {
    this.router.navigate(['/']);
  }

  archive(produit: Produit) {
    produit.isArchive = true; 
    console.log('Archiver:', produit);
  }

  unarchive(produit: Produit) {
    produit.isArchive = false; 
    console.log('Désarchiver:', produit);
  }
}
