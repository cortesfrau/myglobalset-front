import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map } from 'rxjs';
import { AuthStateService } from './auth-state.service';
import { HttpErrorHandlerService } from './http-error-handler.service';
import { TokenService } from './token.service';
import { Router } from '@angular/router';
import { Collection } from '../models/collection.interface';

@Injectable({
  providedIn: 'root'
})
export class CollectionService {

  apiBaseUrl: string;

  constructor(
    private http: HttpClient,
    private errorHandler: HttpErrorHandlerService,
    private tokenService: TokenService,
  ) {

    // Auth API base URL
    this.apiBaseUrl = 'http://myglobalset-back.test/api/collection';
  }

  // Create new collection
  create(formData: Object): Observable<any> {
    const apiUrl = `${this.apiBaseUrl}/create`;
    const token = this.tokenService.get();

    console.log(formData);

    // Set the Authorization header with the token
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    // Agrega los encabezados a la llamada HTTP
    const requestOptions = {
      headers: headers
    };

    return this.http.post(apiUrl, formData, requestOptions).pipe(
      catchError(this.errorHandler.handleError)
    );
  }

  delete(collectionId: number): Observable<any> {
    const apiUrl = `${this.apiBaseUrl}/delete/${collectionId}`;
    const token = this.tokenService.get();

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    const requestOptions = {
      headers: headers
    };

    return this.http.post(apiUrl, requestOptions).pipe(
      catchError(this.errorHandler.handleError)
    )
  }

  getUserCollections(userId: number): Observable<any> {
    const apiUrl = `${this.apiBaseUrl}/user/${userId}`;
    const token = this.tokenService.get();

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    const requestOptions = {
      headers: headers
    };

    return this.http.get(apiUrl, requestOptions).pipe(
      catchError(this.errorHandler.handleError)
    );
  }

  getCollection(collectionId: number): Observable<any> {
    const apiUrl = `${this.apiBaseUrl}/${collectionId}`;
    const token = this.tokenService.get();

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    const requestOptions = {
      headers: headers
    };

    return this.http.get(apiUrl, requestOptions).pipe(
      catchError(this.errorHandler.handleError)
    );
  }

  getCollectionContent(collectionId: number): Observable<any> {
    const apiUrl = `${this.apiBaseUrl}/content/${collectionId}`;
    const token = this.tokenService.get();

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    const requestOptions = {
      headers: headers
    };

    return this.http.get(apiUrl, requestOptions).pipe(
      catchError(this.errorHandler.handleError)
    );
  }

  createCollectedCardPrint(formData: Object): Observable<any> {
    const apiUrl = `http://myglobalset-back.test/api/collected-card-print/create`;
    const token = this.tokenService.get();

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    const requestOptions = {
      headers: headers
    };

    return this.http.post(apiUrl, formData, requestOptions).pipe(
      catchError(this.errorHandler.handleError)
    );
  }

  addPrintToCollection(formData: Object): Observable<any> {
    const apiUrl = `http://myglobalset-back.test/api/collected-card-print/create`;
    const token = this.tokenService.get();

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    const requestOptions = {
      headers: headers
    };

    return this.http.post(apiUrl, formData, requestOptions).pipe(
      catchError(this.errorHandler.handleError)
    );
  }

  removePrintFromCollection(formData: Object): Observable<any> {
    const apiUrl = `http://myglobalset-back.test/api/collected-card-print/remove`;
    const token = this.tokenService.get();

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    const requestOptions = {
      headers: headers
    };

    return this.http.post(apiUrl, formData, requestOptions).pipe(
      catchError(this.errorHandler.handleError)
    );
  }

  isPrintInCollection(collectionId: number, scryfallId: string): Observable<boolean> {
    const apiUrl = `http://myglobalset-back.test/api/collected-card-print/is-print-in-collection`;
    const token = this.tokenService.get();

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    const requestOptions = {
      headers: headers
    };

    const params = {
      collection_id: collectionId.toString(),
      scryfall_id: scryfallId
    };

    return this.http.get<boolean>(apiUrl, { ...requestOptions, params }).pipe(
      catchError(this.errorHandler.handleError)
    );
  }

  getCollectionStats(collectionId: any): Observable<any> {
    const apiUrl = `http://myglobalset-back.test/api/collection/stats/${collectionId}`;
    const token = this.tokenService.get();

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    const requestOptions = {
      headers: headers
    };

    return this.http.get(apiUrl, requestOptions).pipe(
      catchError(this.errorHandler.handleError)
    )
  }


}
