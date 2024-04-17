import { Component, OnInit, importProvidersFrom } from '@angular/core';
import { TranslationService } from '../../services/translation.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import {   } from "@angular/material";
import { FormBuilder } from '@angular/forms';
import { AppComponent } from '../../app.component';

import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInput } from '@angular/material/input';



@Component({
  selector: 'app-translation-edit',
  templateUrl: './translation-edit.component.html',
  styleUrls: ['./translation-edit.component.css'],
  standalone : true,
  imports:[FormsModule, MatLabel,MatInput,MatFormField,MatButtonModule],
})

export class TranslationEditComponent implements OnInit {

  translation: any = {
    text: '',
    translations: {
      English: '',
      Hindi: '', 
      Tamil: '',
      Telgu: '',
      Kannada: ''
    },
    updatedBy: 'System'
  };

  constructor(private translationService: TranslationService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.translationService.getTranslationById(id).subscribe(data => {
      this.translation = data;
    });
  }

  updateTranslation(): void {
    const id = this.route.snapshot.params['id'];
    this.translationService.updateTranslation(id, this.translation).subscribe(() => {
      this.router.navigate(['/translations']);
    });
  }
}
