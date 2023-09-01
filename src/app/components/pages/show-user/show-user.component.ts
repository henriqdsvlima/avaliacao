import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { IUser, IUserPreview } from 'src/app/models/user/user';
import { UserService } from 'src/app/services/user/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-delete-user',
  templateUrl: './show-user.component.html',
  styleUrls: ['./show-user.component.scss']
})
export class ShowUserComponent implements OnInit {


  userForm!: FormGroup;
  user!: IUser;

  constructor(private fb: FormBuilder,
              private userService: UserService,
              private route: ActivatedRoute,
              private router:Router) {
    this.userForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      email: ['']
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.userService.getUserById(id).subscribe((user) => {
      if (user && user.firstName && user.lastName) {
        this.user = user;
        this.userForm.patchValue(user);
        // Desativando os campos para apenas visualização
        this.userForm.disable();
      }
    });
  }

  backToUserList(): void {
    this.router.navigate(["/users"]);
  }
}
