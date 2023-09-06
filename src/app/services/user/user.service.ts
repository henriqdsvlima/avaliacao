import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';
import { IUser, IUserPreview } from '../../models/user/user';
import { ListResponse } from 'src/app/models/response/list-response';
import { ApiError } from 'src/app/models/response/error/api-error';
import { ApiErrorType } from 'src/app/models/response/error/api-error-type';
import { environment } from 'src/environments/environment';

const API_URL = environment.apiUrl;
@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}


  createUser(user: IUser): Observable<IUser> {
    const endpoint = `${API_URL}/user/create`;
    return this.http.post<IUser>(endpoint, user).pipe(
      map((user) => user),
      catchError(this.handleError)
    );
  }

  getUserById(id: string | null): Observable<IUser> {
    const endpoint = `${API_URL}/user/${id}`;
    return this.http.get<IUser>(endpoint).pipe(
      map((user) => user),
      catchError(this.handleError)
    );
  }

  getUsersForList(): Observable<ListResponse<IUserPreview>> {
    let endpoint = `${API_URL}/user?created=1`;

    return this.http
      .get<ListResponse<IUserPreview>>(endpoint)
      .pipe(catchError(this.handleError));
  }

  updateUser(userId: IUser): Observable<IUser> {
    const endpoint = `${API_URL}/user/${userId.id}`;
    return this.http
      .put<IUser>(endpoint, userId)
      .pipe(catchError(this.handleError));
  }

  showUser(userId: string): Observable<IUser> {
     const endpoint = `${API_URL}/user/${userId}`;
    return this.http.get<IUser>(endpoint).pipe(
      map((user) => user),
      catchError(this.handleError)
    );
  }
  private handleError(error: HttpErrorResponse): Observable<never> {
    let apiError: ApiError;

    // Se o erro for uma resposta HTTP
    if (error.error instanceof Object) {
      apiError = error.error as ApiError;
    } else {
      apiError = {
        type: ApiErrorType.SERVER_ERROR,
        message: 'Something went wrong. Please try again later.',
      };
    }

    return new Observable((observer) => {
      observer.error(apiError);
    });
  }
}
