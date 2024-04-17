import { Component, OnInit ,NgModule} from '@angular/core';
import { TranslationService } from '../../services/translation.service';

import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgFor } from '@angular/common';
import {   } from "@angular/material";
import { MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


@Component({
  selector: 'app-translation-list',
  templateUrl: './translation-list.component.html',
  styleUrls: ['./translation-list.component.css'],
  standalone : true,
  imports:[NgFor, MatInputModule, FormsModule, MatFormField, CommonModule],
})
export class TranslationListComponent implements OnInit {

  translations: any[] = [];
  searchText: string = '';

  constructor(private translationService: TranslationService, private router:Router) { }

  ngOnInit(): void {
    this.fetchTranslations();
  }

  fetchTranslations(): void {
    this.translationService.getTranslations().subscribe(data => {
      this.translations = data;
    });
  }

  searchTranslations(): void {
    if (this.searchText) {
      this.translations = this.translations.filter(translation =>
        translation.text.toLowerCase().includes(this.searchText.toLowerCase())
      );
    } else {
      this.fetchTranslations();
    }
  }
  editTranslation(id: string): void {
    console.debug('hi how are you');
    this.router.navigate(['/edit', id]);
  }

  deleteTranslation(id: string): void {
    this.translationService.deleteTranslation(id).subscribe(() => {
      this.fetchTranslations();
    });
  }
}
