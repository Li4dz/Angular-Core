import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styles: []
})
export class UserInfoComponent implements OnInit {

  constructor(public router : Router) { }

  ngOnInit() {
  }

}
