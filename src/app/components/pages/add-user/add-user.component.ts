import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IUser } from 'src/app/models/user/user';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule]
})
export class AddUserComponent  implements OnInit  {

addUserForm!:FormGroup

@Output() userCreated: EventEmitter<IUser> = new EventEmitter();
constructor(private fb: FormBuilder, private userService: UserService) { }
  ngOnInit(): void {
    this.addUserForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit() {
    if (this.addUserForm.valid) {
      this.userService.createUser(this.addUserForm.value)
        .subscribe(
          user => {
            console.log('User created successfully', user);
            this.userCreated.emit(user);
          },
          error => {
            console.error('Error creating user', error);
          }
        );
    }
  }

}
