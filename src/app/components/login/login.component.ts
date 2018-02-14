import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  constructor(public router : Router,
              private auth : AuthService) { }

  ngOnInit() {
  }

  login(){
    this.auth.login();
    // localStorage.setItem('isLoggedin', 'true');
    // this.router.navigate(['/dashboard'])    
  }

}
