import { Injectable } from '@angular/core';
import { CacheItem } from 'src/app/models/cache/cache-item';
@Injectable({
  providedIn: 'root'
})
export class CacheService {
  private cache = new Map<string, CacheItem>();
  private DEFAULT_TTL = 0; // tempo de vida do cache de um minutos

  get(url: string): any | undefined {
    const cached = this.cache.get(url);
    if (!cached) {
      return undefined;
    }

    const isExpired = Date.now() - cached.timestamp > this.DEFAULT_TTL;
    //verifica se o item do cache expirou. Se sim, deletar o item e retornar undefined
    if (isExpired) {
      this.cache.delete(url);
      return undefined;
    }

    return cached.value;
  }

  set(url: string, value: any, ttl = this.DEFAULT_TTL): void {

    const cacheItem: CacheItem = {
      value,
      timestamp: Date.now(),
      ttl
    };
    this.cache.set(url, cacheItem);
  }
}

