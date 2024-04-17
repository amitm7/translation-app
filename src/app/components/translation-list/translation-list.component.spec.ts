import { Component, OnInit } from '@angular/core';
import { TranslationService } from '../../services/translation.service';
import { Router } from '@angular/router';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormField } from '@angular/material/form-field';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-translation-list',
  templateUrl: './translation-list.component.html',
  styleUrls: ['./translation-list.component.css'],
  standalone : true,
  imports:[NgFor, FormsModule, MatSlideToggleModule, MatFormField],
})
export class TranslationListComponent implements OnInit {

  translations: any[] = [];
  searchText: string = '';

  constructor(private translationService: TranslationService, private router: Router) { }

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
      this.translationService.searchTranslations(this.searchText).subscribe(data => {
        this.translations = data;
      });
    } else {
      this.fetchTranslations();
    }
  }

  editTranslation(id: string): void {
    this.router.navigate(['/edit', id]);
  }

  deleteTranslation(id: string): void {
    this.translationService.deleteTranslation(id).subscribe(() => {
      this.fetchTranslations();
    });
  }
}
