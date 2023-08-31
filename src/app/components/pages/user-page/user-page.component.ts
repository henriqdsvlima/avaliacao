import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IUser } from 'src/app/models/user/user';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss'],
})
export class UserPageComponent implements OnInit {
  userId!: string | null;
  user!:IUser
  constructor(private route: ActivatedRoute, private userService:UserService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.userId = params['id'];

      // Uma vez que temos o userId, podemos chamar o serviço para obter os detalhes do usuário
      if (this.userId) {
        this.userService.getUserById(this.userId).subscribe(userResponse => {
          this.user = userResponse;  // Supondo que a resposta tenha a estrutura do `SingleResponse<T>`
        });
      }
    });
  }


}
