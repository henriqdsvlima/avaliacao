import {
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';

import { Observable } from 'rxjs';
export class TokenInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Obtenha o token de onde você o armazena, por exemplo, LocalStorage
    const token:string | null = localStorage.getItem('64cbeddd253549dc8b990b71w');

    // Verifique se o token existe
    if (token) {
      // Clone a requisição e substitua o cabeçalho pelo cabeçalho atualizado
      request = request.clone({
        headers: new HttpHeaders({
          'Authorization': `Bearer ${token}`
        })
      });
    }

    // Encaminhe a requisição editada ou a original
    return next.handle(request);
  }
}
