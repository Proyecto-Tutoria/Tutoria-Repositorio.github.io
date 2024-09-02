// src/app/services/profile.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private apiUrl = 'http://127.0.0.1:8000/api/profiles/';

  constructor(private http: HttpClient) {}

  getProfiles(): Observable<any> {
    return this.http.get<any[]>(this.apiUrl); // Asegúrate de que devuelves un observable de array
  }
}
