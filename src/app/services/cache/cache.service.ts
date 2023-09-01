import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CacheService {
  private cache = new Map<string, any>();

  get(url: string): any | undefined {
    return this.cache.get(url);
  }

  set(url: string, value: any): void {
    this.cache.set(url, value);
  }
}
