import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { TokenService } from './token.service';
import { AuthStateService } from './auth-state.service';
import { Router } from '@angular/router';
import { HttpErrorHandlerService } from './http-error-handler.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  urlAuthApi: string;

  constructor(
    private http: HttpClient,
    private errorHandler: HttpErrorHandlerService,
    private Token: TokenService,
    private AuthState: AuthStateService,
    private Router: Router
  ) {
    // Auth API base URL
    this.urlAuthApi = 'http://myglobalset-back.test/api/auth';
  }

  // Log In
  login(formData: JSON): Observable<any> {
    const apiUrl = `${this.urlAuthApi}/login`;

    return this.http.post(apiUrl, formData).pipe(
      catchError(this.errorHandler.handleError)
    );
  }

  // Sign Up
  signup(formData: JSON): Observable<any> {
    const apiUrl = `${this.urlAuthApi}/signup`;

    return this.http.post(apiUrl, formData).pipe(
      catchError(this.errorHandler.handleError)
    );
  }

  // Log Out
  logout() {
    this.AuthState.changeAuthStatus(false);
    this.Token.remove();
    this.Router.navigateByUrl('/login');
  }

  // Password Reset Link
  sendPasswordResetLink(formData: JSON): Observable<any> {
    const apiUrl = `${this.urlAuthApi}/send-password-reset-link`;

    return this.http.post(apiUrl, formData).pipe(
      catchError(this.errorHandler.handleError)
    );
  }

  // Change Password
  changePassword(formData: JSON): Observable<any> {
    const apiUrl = `${this.urlAuthApi}/change-password`;

    return this.http.post(apiUrl, formData).pipe(
      catchError(this.errorHandler.handleError)
    );
  }

}
