import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-searchuser',
  templateUrl: './searchuser.component.html',
  styleUrls: ['./searchuser.component.css']
})
export class SearchuserComponent implements OnInit {

  searchDetails=null;

  constructor(private userService:UserService,private router: Router) { 
   
  }

  ngOnInit(): void {
  }

  searchUserDetails(userName:NgForm){
    this.userService.searchUser(userName.value).subscribe(
      (resp)=>{
        console.log(resp);
        this.searchDetails=resp;
      },
      (err)=>{
        console.log(err);
        
      }
    )
  }

}
function userName(userName: any) {
  throw new Error('Function not implemented.');
}

