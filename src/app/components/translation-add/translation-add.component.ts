import { Component, OnInit } from '@angular/core';
import { TranslationService } from '../../services/translation.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import {   } from "@angular/material";
import { MatFormField } from '@angular/material/form-field';


@Component({
  selector: 'app-translation-add',
  templateUrl: './translation-add.component.html',
  styleUrls: ['./translation-add.component.css'],  standalone : true,
  imports:[NgFor ,FormsModule,MatFormField ],
})
export class TranslationAddComponent implements OnInit {

  translation: any = {
    text: '',
    translations: {
      English: '',
      Hindi: ''
    },
    updatedBy: 'System'
  };

  constructor(private translationService: TranslationService, private router: Router) { }

  ngOnInit(): void {
  }

  addTranslation(): void {
    this.translationService.createTranslation(this.translation).subscribe(() => {
      this.router.navigate(['/translations']);
    });
  }
}

