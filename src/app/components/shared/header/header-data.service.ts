import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HeaderData } from 'src/app/models/header/header-data';

@Injectable({
  providedIn: 'root'
})
export class HeaderDataService {
  private _headerData = new BehaviorSubject<HeaderData>({
    title: 'Avaliação - Gerenciamento de Usuários',
    routeUrl: ''
  })
constructor() { }



get headerData(): HeaderData {
  return this._headerData.value
}

set headerData(headerData: HeaderData) {
  this._headerData.next(headerData)
}


}
