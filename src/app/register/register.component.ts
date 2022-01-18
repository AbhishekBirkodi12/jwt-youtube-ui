import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private userService:UserService,
    private router: Router) { }

  ngOnInit(): void {
  }

  register(registerForm:NgForm){
      this.userService.registerStudent(registerForm.value).subscribe(
        (resp)=>{
          console.log(resp);
          this.getStudentDetails();
          alert("Registration succesfull");
          registerForm.reset();
          this.router.navigate(['/home'])
        },
        (err)=>{
          console.log(err)
          alert("Something went wrong")
        }
      );
  }

  getStudentDetails(){
    this.userService.getUsers().subscribe(
      (resp)=>{
        console.log(resp);
      },
      (err)=>{
        console.log(err);
      }
    )
  }

}
