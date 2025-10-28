import { Component } from '@angular/core';
import { Footer } from "../../core/layout/components/footer/footer";
import { Navbar } from "../../core/layout/components/navbar/navbar";
import { CommonModule } from '@angular/common';

interface HelpTopic {
  title: string;
  description: string;
}

@Component({
  selector: 'app-support-page',
  standalone: true,
  imports: [Footer, Navbar, CommonModule],
  templateUrl: './support-page.html',
  styleUrl: './support-page.scss'
})
export class SupportPage {

    helpTopics: HelpTopic[] = [
    {
      title: 'o básico do VELO',
      description: 'troque a marcha, não o sonho.'
    },
    {
      title: 'configurações de conta',
      description: 'personalize seu perfil e deixe com a sua cara.'
    },
    {
      title: 'sobre as comunidades e eventos',
      description: 'bem mais que rotas, são pessoas e experiências.'
    },
    {
      title: 'problemas com login?',
      description: 'não se preocupe, nós cuidamos do seu rolê.'
    },
    {
      title: 'pagamentos e cobranças',
      description: 'pedale tranquilo, o pagamento é com a gente.'
    },
    {
      title: 'pagamentos e cobranças',
      description: 'pedale tranquilo, o pagamento é com a gente.'
    }
  ];
}
