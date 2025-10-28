import { Component } from '@angular/core';
import { Navbar } from "../../core/layout/components/navbar/navbar";
import { Footer } from "../../core/layout/components/footer/footer";
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-page',
  imports: [Navbar, Footer, ReactiveFormsModule, CommonModule],
  templateUrl: './about-page.html',
  styleUrl: './about-page.scss'
})
export class AboutPage {

}
