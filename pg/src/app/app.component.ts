import { Component } from '@angular/core';
// import { RouterOutlet,RouterLink, RouterLinkActive } from '@angular/router';
import { HomeComponent } from "./home/home.component";
// import { LoginPageComponent } from "./login-page/login-page.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TECH-5 Solutions';
}
