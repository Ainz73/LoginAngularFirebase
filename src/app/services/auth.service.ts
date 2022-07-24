import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afauth: AngularFireAuth, private router: Router) { }

  async register(email: string, password: string) {
    try{
      return await this.afauth.createUserWithEmailAndPassword(email, password);
    } catch(error){
      console.log("error en login: ", error);
      return this.router.navigate(['/register']);
    }
}

  async login(email: string, password: string) {
    try{
      return await this.afauth.signInWithEmailAndPassword(email, password);
    } catch(error){
      console.log("error en login: ", error);
      return this.router.navigate(['/login']);
    }
}

async loginWithGoogle(email: string, password: string) {
  try{
    return await this.afauth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  } catch(error){
    console.log("error en login: ", error);
    return null;  
  }
}

 getUserLogged(){
  return this.afauth.authState;
 }
 logOut(){
  return this.afauth.signOut();
  }

  forgotPassword(email : string){
    console.log("email: ", email);
    this.afauth.sendPasswordResetEmail(email).then(() => {
      this.router.navigate(['/login']);
    }, err => {
      this.router.navigate(['/forgot-password']);
    })
  }

  // async forgotPassword(email : string){
  //   try {
  //     return await this.afauth.sendPasswordResetEmail(email);
  //   } catch  (err) {
  //     console.log("error en enviar email");
  //     return null;
  //   }
  // }

}
