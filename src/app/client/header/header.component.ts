import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(
    private router: Router,
    private readonly userService: UsersService
  ) {}

  isAuthenticated: boolean = false;
  isAdmin: boolean = false;
  isUser: boolean = false;
  imageUrl = 'assets/images/logoWithoutBg.png';

  ngOnInit(): void {
    this.isAuthenticated = this.userService.isAuthenticated();
    this.isAdmin = this.userService.isAdmin();
    this.isUser = this.userService.isUser();
  }

  logout(): void {
    this.userService.logOut();
    this.isAuthenticated = false;
    this.isAdmin = false;
    this.isUser = false;
    this.router.navigateByUrl('/login');
  }
  navProd() {
    this.router.navigateByUrl('/produitsClt');
  }
}
