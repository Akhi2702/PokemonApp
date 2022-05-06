import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { PokeserviceService } from '../pokeservice.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user=new User();
  message='';
  constructor(private service:PokeserviceService,private route:Router) { }

  ngOnInit(): void {
  }

  loginUser(){
    this.service.loginUserFromRemote(this.user).subscribe(
      data=>{
        alert("Login Successful");
        this.service.setUserDetails(data);
        this.route.navigate(['/home'])
        console.log("Response received");},
      error=>{
        console.log("Exception occured");
        this.message="Bad credentials, please enter valid emailId and password";
      }
    )
  }

  gotoSignUp(){
    this.route.navigate(['/signup']);
  }
 

}
