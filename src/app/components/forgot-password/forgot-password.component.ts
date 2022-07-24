import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  usuario = {
    email: ''
  }

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }


 forgotPassword() {
    this.authService.forgotPassword(this.usuario.email);
    this.usuario.email = '';
  }
  
}
