import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonSearchbar, IonIcon, IonButton } from '@ionic/angular/standalone';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

declare var google: any;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent,IonSearchbar, IonIcon, FormsModule, IonicModule, CommonModule  ],
})
export class HomePage {
  searchQuery: string = '';
  suggestions: any[] = [];
  selectedCountry: string = '';
  selectedState: string = '';
  selectedPlace: string = '';
  uaeStates = [
    {
      name: "Abu Dhabi",
      places: ["Corniche", "Al Reem Island", "Khalifa City", "Mussafah", "Yas Island", "Al Ain"]
    },
    {
      name: "Dubai",
      places: ["Bur Dubai", "Deira", "Jumeirah", "Dubai Marina", "Business Bay", "Al Barsha", "JVC", "Palm Jumeirah"]
    },
    {
      name: "Sharjah",
      places: ["Al Nahda", "Al Majaz", "Al Taawun", "Muweilah", "Al Khan", "University City"]
    },
    {
      name: "Ajman",
      places: ["Al Rashidiya", "Al Jurf", "Ajman Downtown", "Mushairef", "Nuaimiya"]
    },
    {
      name: "Umm Al Quwain",
      places: ["Al Salamah", "Al Raas", "Al Dar Al Baida", "Al Haditha", "Al Raudah"]
    },
    {
      name: "Ras Al Khaimah",
      places: ["Al Hamra", "Mina Al Arab", "Al Nakheel", "Al Jazeera Al Hamra", "Khozam"]
    },
    {
      name: "Fujairah",
      places: ["Dibba", "Al Fujairah City", "Sakamkam", "Kalba", "Mirbah"]
    }
  ];
  
  states: any[] = [];
  places: string[] = [];
  menuLinks = document.querySelectorAll<HTMLElement>(".menu-link");
  
  constructor() {
    this.menuLinks.forEach((link: HTMLElement) => {
      link.addEventListener("click", () => {
        this.menuLinks.forEach((link: HTMLElement) => {
          link.classList.remove("is-active");
        });
        link.classList.add("is-active");
      });
    });
  }

  onCountryChange(event: any) {
    if (event.detail.value === "UAE") {
      this.states = this.uaeStates;
    } else {
      this.states = [];
    }
    this.selectedState = "";
    this.places = [];
  }

  onStateChange(event: any) {
    const state = this.states.find(s => s.name === event.detail.value);
    this.places = state ? state.places : [];
    this.selectedPlace = "";
  }
}
