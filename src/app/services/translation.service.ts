import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from 'express';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {

  apiUrl = 'http://localhost:8080/translations'; // Placeholder API URL

  constructor(private http: HttpClient) { }

  getTranslations(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getTranslationById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/getTranslationByID?id=${id}`);
  }

  createTranslation(translation: any): Observable<any> {
    return this.http.post(this.apiUrl, translation);
  }

  updateTranslation(id: string, translation: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/updateTranslationByID?id=${id}`, translation);
  }

  deleteTranslation(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/deleteTranslationByID?id=${id}`);
  }

  searchTranslations(text: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/getTranslationByText?text=${text}`);
  }
}
