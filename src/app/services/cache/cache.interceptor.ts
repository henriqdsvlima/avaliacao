import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse
} from '@angular/common/http';

import { Observable, of, tap } from 'rxjs';
import { CacheService } from './cache.service';

@Injectable()
export class CacheInterceptor implements HttpInterceptor {

  constructor(private cacheService: CacheService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.method !== 'GET') {
      return next.handle(req);
    }

    const cachedResponse = this.cacheService.get(req.url);
    if (cachedResponse) {
      return of(new HttpResponse({ body: cachedResponse, status: 200 }));
    } else {
      return next.handle(req).pipe(
        tap(event => {
          if (event instanceof HttpResponse) {
            this.cacheService.set(req.url, event.body);
          }
        })
      );
    }
  }
}

