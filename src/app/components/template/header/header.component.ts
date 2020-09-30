import { HeaderService } from './header.service';
import { Component, OnInit } from '@angular/core';
import { HeaderData } from './header.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private headerService: HeaderService) {}
      
  ngOnInit(): void {   
  }

  get title(): string {
    return this.headerService.headerData.title;
  }

  get icon(): string {
    return this.headerService.headerData.icon;
  }

  get linkUrl(): string {
    return this.headerService.headerData.linkUrl;
  }

}
