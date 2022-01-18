import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-viewusers',
  templateUrl: './viewusers.component.html',
  styleUrls: ['./viewusers.component.css']
})
export class ViewusersComponent implements OnInit {
   userDetails =null;

   userToUpdate ={
    userName:"",
    userFirstName:"",
    userLastName:"",
    userPassword:""

   };
   
  constructor(private userService:UserService, private router: Router) { 
    this.getUsertDetails();
  };

  ngOnInit(): void {
  }

  

  getUsertDetails(){
    this.userService.getUsers().subscribe(
      (resp)=>{
        console.log(resp);
        this.userDetails=resp;

        
      },
      (err)=>{
        console.log(err);
        
      }
    )
  }

  
update(user){
  this.userToUpdate=user;
}

updateStudent(){
  this.userService.updateUser(this.userToUpdate).subscribe(
    (resp)=>{
      console.log(resp);
      alert("Succesfully updated user data")
    
    },
    (err)=>{
      console.log(err);
      alert("oh something is wrong")
    }
  );
}
}

