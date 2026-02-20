import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header';
import { FooterComponent } from './components/footer/footer';
import { BackToTopComponent } from './components/back-to-top/back-to-top';
import { FloatingContactComponent } from './components/floating-contact/floating-contact';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, BackToTopComponent, FloatingContactComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
