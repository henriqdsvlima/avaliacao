import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';
import { IUserPreview } from './../../models/user-preview';
import { IUser, PartialUser } from './../../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

constructor(private http:HttpClient) { }

private API_URL = 'https://dummyapi.io/data/v1'



createUser(user: IUser):Observable<IUser> {
  return this.http.post<IUser>(`${this.API_URL}/user/create`, user)
    .pipe(
      catchError((error: any) => {
        // Handle the error here
        return throwError(error);
      })
    );
}




getUserById(userId: number):Observable<IUser> {
  return this.http.get<IUser>(`${this.API_URL}/user/:${userId}`) .pipe(
    catchError((error: any) => {
      // Handle the error here
      return throwError(error);
    })
  );
}



updateUser(userId: number, updatedData: IUser): Observable<IUser> {
  return this.http.put<IUser>(`${this.API_URL}/user/:${userId}`, updatedData).pipe(
    catchError((error: any) => {
      // Handle the error here
      return throwError(error);
    })
  );;
}



deleteUser(userId:number):Observable<IUser> {
  return this.http.delete<IUser>(`${this.API_URL}/user/${userId}`).pipe(
    catchError((error: any) => {
      // Handle the error here
      return throwError(error);
    })
  );
}


}
