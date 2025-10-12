import { Component } from '@angular/core';
import { Navbar } from '../../core/layout/components/navbar/navbar';
import { Footer } from '../../core/layout/components/footer/footer';
import { TabsUnderlineDirective } from "./tabs-underline.directive";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Footer, Navbar, TabsUnderlineDirective],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
