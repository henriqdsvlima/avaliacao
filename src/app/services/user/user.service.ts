import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { IUserPreview } from '../../models/user/user-preview';
import { IUser } from '../../models/user/user';
import { ListResponse } from 'src/app/models/response/list-response';
import { SingleResponse } from './../../models/response/single-response';
import { ApiError } from 'src/app/models/response/error/api-error';
import { ApiErrorType } from 'src/app/models/response/error/api-error-type';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  private API_URL = 'https://dummyapi.io/data/v1'



  createUser(user: IUser): Observable<IUser> {
    const endpoint = `${this.API_URL}/user/create`
    return this.http.post<IUser>(endpoint, user)
      .pipe(
        catchError(this.handleError)
      );
  }


  getUserById(id: string): Observable<IUser> {
    const endpoint = `${this.API_URL}/user/${id}`
    return this.http.get<IUser>(endpoint).pipe(
      catchError(this.handleError)
    );
  }




  getUsersForList(page: number, limit: number): Observable<ListResponse<IUserPreview>> {
    //buscar usuarios com um limite de x usuarios por pagina
    const endpoint = `${this.API_URL}/users?page=${page}&limit=${limit}`;
    return this.http.get<ListResponse<IUserPreview>>(endpoint).pipe(
      catchError(this.handleError)
    );
  }





  updateUser(userId: number, updatedData: IUser): Observable<IUser> {
    const endpoint = `${this.API_URL}/user/${userId}`
    return this.http.put<IUser>(endpoint, updatedData).pipe(
      catchError(this.handleError)
    );
  }



  deleteUser(userId: number): Observable<IUser> {
    const endpoint = `${this.API_URL}/user/${userId}`
    return this.http.delete<IUser>(endpoint).pipe(
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

    // Aqui você pode fazer switch-case ou if-else com base no tipo de erro, se necessário.
    // Por exemplo, você pode querer logar certos erros, mostrar diferentes mensagens ao usuário, etc.

    return new Observable(observer => {
      observer.error(apiError);
    });
  }







}
