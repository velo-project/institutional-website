import { Component } from '@angular/core';
import { NavbarUnderlineDirective } from "./navbar-underline.directive";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NavbarUnderlineDirective, RouterLink],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.scss']
})
export class Navbar { }
