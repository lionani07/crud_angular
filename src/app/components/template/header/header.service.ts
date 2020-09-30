import { HeaderData } from './header.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  private _headerData = new BehaviorSubject<HeaderData>({
    title: "Início",
    icon: "home",
    linkUrl: ""
  });

  constructor() {}

  get headerData(): HeaderData {
    return this._headerData.value;
  }

  set headerData(headerdata: HeaderData) {
    this._headerData.next(headerdata);
  }
  
}
