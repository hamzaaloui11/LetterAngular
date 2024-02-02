import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {catchError, Observable, throwError} from 'rxjs';
import {Letter} from "./Letter";
import {Adress} from "./Adress";

@Injectable({
  providedIn: 'root'
})
export class LitterService {
  private apiUrl = 'http://localhost:8085/';


  constructor(private http: HttpClient) {}

  getAllLitters(): Observable<any> {
    return this.http.get(this.apiUrl+'littersA');
  }
  addLetters(letter: Letter): Observable<any> {
    return this.http.post(this.apiUrl + 'litter', letter)
      .pipe(
        catchError((error: any) => {
          console.error('Error adding letter:', error);
          return throwError(error);
        })
      );
  }

  addAdresse(adress: Adress): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}adress`, adress).pipe(
      catchError((error: any) => {
        console.error('Error adding address:', error);
        return throwError(error);
      })
    );
  }

  addLitterAdress(litterId: number, addressId: number): Observable<void> {
    const payload = {
      litter_id: litterId,
      address_id: addressId,
    };

    return this.http.post<void>(`${this.apiUrl}litter_adress`, payload).pipe(
      catchError((error: any) => {
        console.error('Error adding letter address:', error);
        return throwError(error);
      })
    );
  }
}
