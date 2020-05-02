import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // TODO: change this URL to the heroku api
  url = 'http://localhost:8080/api/users';

  constructor(private httpClient: HttpClient) { }

  // Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      // TODO: make a mechanism to update the token automatically when adding the login to the app
      Authorization: 'Basic YWRtaW46YWRtaW4='
    })
  };

  setToke(token: string) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        // TODO: make a mechanism to update the token automatically when adding the login to the app
        Authorization: `Basic ${token}`
      })
    };
  }

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.url, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }

  createUser(user: User): Observable<User> {
    return this.httpClient.post<User>(this.url, JSON.stringify(user), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }

  updateUser(user: User): Observable<User> {
    return this.httpClient.put<User>(this.url + '/' + user.id, JSON.stringify(user), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }

  deleteUser(id: string): Observable<User> {
    return this.httpClient.delete<User>(this.url + '/' + id, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }

  // Manipulação de erros
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
