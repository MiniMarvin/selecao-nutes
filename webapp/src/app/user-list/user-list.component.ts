import { Component, OnInit, HostListener } from '@angular/core';
import { users } from './user-list-datasource';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users = users;
  Math = Math;
  public innerWidth: any;
  public colsNum: number;

  constructor() { }

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
    this.colsNum = Math.max(1, Math.floor(innerWidth/300));
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
    this.colsNum = Math.max(1, Math.floor(innerWidth/300));
  }
  
  presentDate(date: Date): String{
    // for the case where the date come as an integer
    date = new Date(date);
    let dia  = date.getDate().toString().padStart(2, '0'),
        mes  = (date.getMonth()+1).toString().padStart(2, '0'), //+1 pois no getMonth Janeiro começa com zero.
        ano  = date.getFullYear();
    return dia+"/"+mes+"/"+ano;
  }
}

