import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  email: string = '';

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  resetPassword() {
    this.authService.resetPassword(this.email);
    this.email = '';
  }

}
