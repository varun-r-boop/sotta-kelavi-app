import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public data:any
  public password:any
  constructor(private router:Router){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  onlogin(){
    this.router.navigate(['\home'])
  }

}
