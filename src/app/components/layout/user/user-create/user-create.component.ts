import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styles: []
})
export class UserCreateComponent implements OnInit {

  constructor(public router : Router) { }

  ngOnInit() {
  }

}
