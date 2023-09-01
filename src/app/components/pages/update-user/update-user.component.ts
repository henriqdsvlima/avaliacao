import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { IUser } from 'src/app/models/user/user';
import { UserService } from 'src/app/services/user/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent {

  userForm!: FormGroup;
  user!: IUser;

  constructor( private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute) {

      {
        this.userForm = this.fb.group({
          firstName: [''],  // null ou '' como valor inicial
          lastName: [''], // null ou '' como valor inicial
        });
      }
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.userService.getUserById(id).subscribe((user) => {
       if (user && user.firstName && user.lastName) {
          this.user = user;
          this.userForm.patchValue(user);
       }
    });
 }
 updateUser(): void {
  // Atualizando o objeto this.user com os novos valores do formulário
  const updatedUserValues = this.userForm.value;
  this.user = { ...this.user, ...updatedUserValues };

  this.userService.updateUser(this.user).subscribe(() => {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Usuário Atualizado com Sucesso',
        showConfirmButton: false,
        timer: 1500
      })
      this.router.navigate(["/users"]);
    },
    error => {
      console.error('Error deleting user', error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Algo deu errado',
      })
    });
}

  cancel(): void {
    this.router.navigate(["/users"]);
  }
}
