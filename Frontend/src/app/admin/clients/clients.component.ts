import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css'],
})
export class ClientsComponent implements OnInit {
  clients: any;
  token = localStorage.getItem('token') as string;

  constructor(private userservice: UserService) {}

  ngOnInit(): void {
    this.userservice.getUsers(this.token).subscribe((response) => {
      this.clients = response;
    });
  }
}
