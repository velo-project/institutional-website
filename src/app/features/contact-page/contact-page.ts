// src/app/contact/contact.component.ts

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Home } from "../home/home";
import { Navbar } from "../../core/layout/components/navbar/navbar";
import { Footer } from "../../core/layout/components/footer/footer";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    Navbar,
    Footer
],
  templateUrl: './contact-page.html',
  styleUrl: './contact-page.scss'
})
export class ContactComponent {

  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Formulário enviado:', this.contactForm.value);
      // Aqui você adicionaria a lógica para enviar os dados para um backend
    } else {
      console.log('Formulário inválido.');
      // Opcional: marcar todos os campos como "tocados" para exibir erros
      this.contactForm.markAllAsTouched();
    }
  }
}
