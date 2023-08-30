import { HttpClient } from '@angular/common/http';
/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UserService } from './user.service';
import { IUser } from 'src/app/models/user/user';

describe('Service: User', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserService]
    });
  });

  it('should ...', inject([UserService], (service: UserService) => {
    expect(service).toBeTruthy();
  }));


  it('should create a user with valid input data', inject([UserService, HttpClient],
    (service: UserService, httpClient: HttpClient) => {
       const user: IUser = {
         id: '1',
         firstName: 'John',
         lastName: 'Doe',
         email: 'john.doe@example.com'
       };

       const result = service.createUser(user);
       expect(result).toBeTruthy();
}));




});
