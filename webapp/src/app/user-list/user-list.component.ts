import { Component, OnInit, HostListener, OnDestroy, Inject } from '@angular/core';
// import { users } from './user-list-datasource';
import { User } from '../models/user';
import { UserService } from '../services/user.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit, OnDestroy {
  users: User[] = [];
  Math = Math;
  public innerWidth: any;
  public colsNum: number;
  timer: number;

  constructor(private userService: UserService, public dialog: MatDialog) { }

  // init of the application
  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
    this.colsNum = Math.max(1, Math.floor(innerWidth / 300));

    // TODO: create a time scheduled pool for make the requests
    this.getUsers();
    this.timer = window.setInterval(() => {
      this.getUsers();
    }, 200);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
    this.colsNum = Math.max(1, Math.floor(innerWidth / 300));
  }

  ngOnDestroy(): void {
    clearInterval(this.timer);
  }

  // API calls
  getUsers() {
    this.userService.getUsers().subscribe((users: User[]) => {
      this.users = users;
      console.log(this.users);
    });
  }

  deleteUser(user: User) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '250px',
      data: {title: 'deletar usuário',
        message: `você tem certeza que deseja deletar a conta de ${user.name.split(' ')[0]}? Essa ação é irreversível, então se não diver certeza recomendamos que não realize agora`,
        actionTitle: 'deletar',
        handler: () => this.userService.deleteUser(user.id.toString()).toPromise()}
    });
  }

  editUser(user: User) {
    console.log(user);
  }

  presentDate(date: Date): string{
    // for the case where the date come as an integer
    date = new Date(date);
    const dia  = date.getDate().toString().padStart(2, '0');
    const mes  = (date.getMonth() + 1).toString().padStart(2, '0'); // +1 pois no getMonth Janeiro começa com zero.
    const ano  = date.getFullYear();
    return dia + '/' + mes + '/' + ano;
  }
}
