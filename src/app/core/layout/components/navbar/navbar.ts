import { Component } from '@angular/core';
import { NavbarUnderlineDirective } from "./navbar-underline.directive";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NavbarUnderlineDirective, RouterModule],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.scss']
})
export class Navbar { }
