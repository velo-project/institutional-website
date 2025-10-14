import { Component } from '@angular/core';
import { Navbar } from "../../core/layout/components/navbar/navbar";
import { Footer } from "../../core/layout/components/footer/footer";

@Component({
  selector: 'app-about-page',
  imports: [Navbar, Footer],
  templateUrl: './about-page.html',
  styleUrl: './about-page.scss'
})
export class AboutPage {

}
