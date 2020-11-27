import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users = []


  constructor(
    private userService: UserService) { }

  ngOnInit(): void {
    this.loadUsers()
  }

  loadUsers() {
    this.userService
    .getUsers()
    .subscribe(response => {
      if (response['status'] == 'success') {
        this.users = response['data']
      } else {
        console.log(response['error'])
      }
    })
  }

  toggleActive(user) {
    this.userService
    .toggleActiveStatus(user)
    .subscribe(response =>{
      if (response['status'] == 'success') {
        this.loadUsers()
      } else {
        console.log(response['error'])
      }
    })
  }
}
