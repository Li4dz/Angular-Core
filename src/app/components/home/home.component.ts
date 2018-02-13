import { Component, OnInit, Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { SweetAlert } from "../../common/sweet-alert/sweet-alert";
import { SwalProperties, ConfirmButtonSwal } from '../../common/sweet-alert/sweet-properties';

function demoFunction(){
  // this.router.navigate(['/login']);
  console.log('2');

}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})

@Injectable()
export class HomeComponent implements OnInit {

  constructor(public router : Router, private alert : SweetAlert) { }

  ngOnInit() {
  }

  goToLogin()
  {
    // var properties = new ConfirmButtonSwal();
    // properties.title = "Are you sure?";
    // properties.text =  "You won't be able to revert this!";
    // properties.confirmButtonText = "Yes, delete it!";
    // this.alert.confirm(properties, demoFunction);
      this.router.navigate(['/login']);
      // this.alert.alertDemo(demoFunction);
  }



}
