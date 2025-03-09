import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { SplashScreen } from '@capacitor/splash-screen';

@Component({
  selector: 'app-splash',
  standalone: true,
  imports: [IonicModule, CommonModule],
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.scss'],
})
export class SplashComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {
  }

  openHome(){
    this.router.navigate(['/home']);
  }
}
