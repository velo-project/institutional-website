import { Component } from '@angular/core';
import { Footer } from "../../core/layout/components/footer/footer";
import { Navbar } from "../../core/layout/components/navbar/navbar";
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-page',
  imports: [Footer, Navbar, ReactiveFormsModule, CommonModule],
  templateUrl: './contact-page.html',
  styleUrl: './contact-page.scss'
})
export class ContactPage {

}
