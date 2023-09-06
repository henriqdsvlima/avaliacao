import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUserPreview } from 'src/app/models/user/user';
import { UserService } from 'src/app/services/user/user.service';
import { HeaderDataService } from '../../shared/header/header-data.service';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  displayedColumns = ['firstName', 'lastName', 'action'];
  users: IUserPreview[] = [];
  allUsers: IUserPreview[] = []; // lista de backup
  userUnsub!: Subscription
  searchControl = new FormControl();

  constructor(private router: Router, private userService: UserService, private headerData: HeaderDataService) {
    headerData.headerData = {
      title: 'Lista de Usuário',
      routeUrl: '/users'
    };

    // Assina a alterações do valor da pesquisa
    this.searchControl.valueChanges.subscribe(value => {
      this.users = this.allUsers.filter(user => user.firstName?.includes(value) || user.lastName?.includes(value));
    });
  }

  ngOnInit(): void {
    this.loadUsers();
  }

  ngOnDestroy(): void {
    if (this.userUnsub) {
      this.userUnsub.unsubscribe();
    }
  }

  loadUsers(): void {
    this.userService.getUsersForList().subscribe(response => {
      this.allUsers = response.data;
      this.users = [...this.allUsers]; // copia todos os usuários para a lista de exibição
    });
  }

  navigateToProductCreate(): void {
    this.router.navigate(['/users/create']);
  }
}
