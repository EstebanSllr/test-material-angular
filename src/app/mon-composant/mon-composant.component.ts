import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

export interface Voiture {
  marque: string;
  model: string;
  couleur: string;
  annee: number;
  neuve: boolean;
}

@Component({
  selector: 'app-mon-composant',
  templateUrl: './mon-composant.component.html',
  styleUrls: ['./mon-composant.component.scss'],
})
export class MonComposantComponent {
  constructor(private router: Router) {}

  counter = 0;
  voitures: Voiture[] = [
    {
      marque: 'peugeot',
      model: '3008',
      couleur: 'bleu',
      annee: 2023,
      neuve: true,
    },
    {
      marque: 'toyota',
      model: 'yaris',
      couleur: 'blanc',
      annee: 2023,
      neuve: false,
    },
    {
      marque: 'citroën',
      model: 'C3',
      couleur: 'noire',
      annee: 2014,
      neuve: false,
    },
    {
      marque: 'toyota',
      model: 'auris',
      couleur: 'gris',
      annee: 2017,
      neuve: true,
    },
    {
      marque: 'volkswagen',
      model: 'touran',
      couleur: 'gris',
      annee: 2021,
      neuve: true,
    },
    {
      marque: 'dacia',
      model: 'duster',
      couleur: 'gris',
      annee: 2022,
      neuve: true,
    },
  ];

  displayedColumns: string[] = ['marque', 'model', 'couleur', 'annee', 'neuve'];

  increment() {
    this.counter++;
  }

  decrement() {
    this.counter--;
  }

  setNeuveTrue(element: Voiture) {
    element.neuve = true;
  }

  setNeuveFalse(element: Voiture) {
    element.neuve = false;
  }

  telephone = new FormControl('');
  nom = new FormControl('');
  email = new FormControl('');
  message = new FormControl('');

  sanitizeTelephone() {
    let sanitizedValue = this.telephone.value?.replace(/[^\d]/g, '') || '';
    sanitizedValue = sanitizedValue.replace(/(\d{2})(?=\d)/g, '$1-');
    this.telephone.setValue(sanitizedValue);
  }

  sanitizeNom() {
    let sanitizedValue = this.nom.value?.replace(/[^a-zA-ZÀ-ÿ\s]/g, '') || '';
    if (sanitizedValue) {
      sanitizedValue = sanitizedValue.charAt(0).toUpperCase() + sanitizedValue.slice(1).toLowerCase();
    }
    this.nom.setValue(sanitizedValue);
  }

  sanitizeEmail() {
    let sanitizedValue = this.email.value?.replace(/[^\w@.-]/g, '') || '';
    this.email.setValue(sanitizedValue);
  }

  sanitizeMessage() {
    const sanitizedValue = this.message.value?.replace(/[^\w\s.,!?]/g, '') || '';
    this.message.setValue(sanitizedValue);
  }

  goToNewPage() {
    this.router.navigate(['/new-page']);
  }
}
