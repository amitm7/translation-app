import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslationListComponent } from './components/translation-list/translation-list.component';
import { TranslationService } from './services/translation.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,TranslationListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  constructor(private service:TranslationService) {}

  title = 'translation-app';
}
