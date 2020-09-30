import { HeaderService } from './../../components/template/header/header.service';
import { Component, OnInit } from '@angular/core';
import { HeaderData } from '../../components/template/header/header.model';
import { title } from 'process';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private _headerData: HeaderData = {
    title: "Início",
    icon: "home",
    linkUrl: ""
  }

  constructor(private headerService: HeaderService) {
      this.headerService.headerData = this._headerData;
   }

  ngOnInit(): void {
  }

}
