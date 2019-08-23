import { AuthService } from './../../../service/auth.service';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  @Input() public name: string;
  @Input() public password: string;
  constructor(
    private readonly authService: AuthService,
    private readonly router: Router,
  ) { }

  public ngOnInit() {
  }

  public login() {
    this.authService.login(this.name, this.password);
    this.router.navigate(['board']);
  }
}
