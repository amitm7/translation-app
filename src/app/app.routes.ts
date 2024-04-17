import { RouterModule, Routes } from '@angular/router';
import { TranslationEditComponent } from './components/translation-edit/translation-edit.component';
import { TranslationListComponent } from './components/translation-list/translation-list.component';
import { TranslationAddComponent } from './components/translation-add/translation-add.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    { path: '', redirectTo: '/translations', pathMatch: 'full' },
    { path: 'translations', component: TranslationListComponent },
    { path: 'add', component: TranslationAddComponent },
    { path: 'edit/:id', component: TranslationEditComponent }
  ];
  
