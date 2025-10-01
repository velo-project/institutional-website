import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar";
import { FooterComponent } from "../../components/footer/footer";

@Component({
  selector: 'app-home',
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
