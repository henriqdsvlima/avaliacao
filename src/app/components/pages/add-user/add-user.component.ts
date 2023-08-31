import { Router, RouterModule } from '@angular/router';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IUser, IUserPreview } from 'src/app/models/user/user';
import { UserService } from 'src/app/services/user/user.service';
import Swal from 'sweetalert2';

import { AppModule } from 'src/app/app.module';
import { MatCardModule } from '@angular/material/card';
import { MatFormField } from '@angular/material/form-field';
import { MaterialModule } from 'src/app/material.module';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
  standalone: true,
  imports: [MatCardModule, MaterialModule, ReactiveFormsModule, RouterModule]
})
export class AddUserComponent  implements OnInit  {

addUserForm!:FormGroup
users!:IUser[]
user!:IUserPreview[]

@Output() userCreated: EventEmitter<IUser> = new EventEmitter();
constructor(private fb: FormBuilder, private userService: UserService, private router:Router) { }
  ngOnInit(): void {
    this.addUserForm = new FormGroup({
      'firstName': new FormControl(null),
      'lastName': new FormControl(null),
      'email': new FormControl(null)
    });
  }

  createUser() {
    if (this.addUserForm.valid) {
      this.userService.createUser(this.addUserForm.value)
        .subscribe(
          user => {
            console.log('User created successfully', user);
            this.userCreated.emit(user);
            this.loadUsers();
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'User created successfully',
              showConfirmButton: false,
              timer: 1500
            })
            this.router.navigate(["/users"]);


          },
          error => {
            console.error('Error creating user', error);
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Something went wrong!',
            })
          }
        );
    }
  }
  backToUserList(): void {
    this.router.navigate(['/users'])
  }

  loadUsers(): void {
    this.userService.getUsersForList().subscribe(
      response => {
        this.user = response.data;
        console.log(this.users);
      },
      error => {
        console.error("Erro ao buscar usuários:", error);
      }
    );
  }

}
