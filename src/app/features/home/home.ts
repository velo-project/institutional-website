import { Component } from '@angular/core';
import { Navbar } from '../../core/layout/components/navbar/navbar';
import { Footer } from '../../core/layout/components/footer/footer';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Footer, Navbar],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
