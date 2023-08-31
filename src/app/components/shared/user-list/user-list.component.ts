import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IUser, IUserPreview } from 'src/app/models/user/user';
import { UserService } from 'src/app/services/user/user.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  userId!: any
  user!:IUser
  ngOnInit(): void {
    this.loadUsers();
    this.userId =  this.route.queryParams.subscribe(params => {
      this.user = {
        firstName: params['firstName'],
        lastName: params['lastName'],
        email: params['email']
      };
    });
  }

  users: IUserPreview[] = [];

  constructor(private userService: UserService, private route: ActivatedRoute) {}

  loadUsers(): void {
    this.userService.getUsersForList(1, 20).subscribe(response => {
      this.users = response.data;
    });
  }


  viewProfile(user: IUserPreview) {
    Swal.fire({
      title: 'Detalhes do Perfil',
      html: `
        <strong>Nome:</strong> ${user.firstName} <br>
        <strong>Sobrenome:</strong> ${user.lastName} <br>
        <strong>Email:</strong> ${user.email || 'Não fornecido'}
      `,
      confirmButtonText: 'Fechar'
    });
  }

}
