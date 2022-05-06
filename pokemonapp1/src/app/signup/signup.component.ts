import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { PokeserviceService } from '../pokeservice.service';
import { User } from '../user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user=new User();
  msg='';

  constructor(private service:PokeserviceService,private route:Router) { }

  ngOnInit(): void {
  }

  signupUser(){
    this.service.SignupUserFromRemote(this.user).subscribe(
      data=>{
        alert("Registration Successful");
        console.log("Response recieved");
        this.route.navigate(['/login'])
      },
      error=>{
        console.log("Exception occured");
        this.msg="User already exist";
      }
    )
  }

}
