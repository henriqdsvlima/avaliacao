import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {

    // Clonando a requisição original e modificando-a para incluir o header 'app-id'
    const clonedReq = req.clone({
      setHeaders: {
        'app-id': '64ed062e4340d229095be2de',
      }
    });

    // Passando a requisição clonada e modificada ao invés da original
    return next.handle(clonedReq);
  }
}
