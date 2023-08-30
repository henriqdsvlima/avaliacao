import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
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
}




getUserById(userId: number):Observable<IUser> {
  return this.http.get<IUser>(`${this.API_URL}/user/:${userId}`)
}



updateUser(userId: number, updatedData: IUser): Observable<IUser> {
  return this.http.put<IUser>(`${this.API_URL}/user/:${userId}`, updatedData);
}



deleteUser(userId:number, deletedUser:IUser):Observable<IUser> {
  return this.http.delete<IUser>(`/user`)
}


}
