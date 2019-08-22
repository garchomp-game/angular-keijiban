import { AuthService } from './../../../service/auth.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  @Input() private name: string;
  @Input() private password: string;
  constructor(
    private readonly authService: AuthService,
  ) { }

  public ngOnInit() {
  }

  private submit() {
    this.authService.login(this.name, this.password);
  }
}
