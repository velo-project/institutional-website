import { Component } from '@angular/core';
import { NavbarUnderlineDirective } from "./navbar-underline.directive";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NavbarUnderlineDirective],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.scss']
})
export class Navbar { }
