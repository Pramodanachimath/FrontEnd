import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent implements OnInit {
user:User={
  username:'',city:'',gender:'',email:'',age:0
}
  constructor() { }

  ngOnInit(): void {
  }

  onRegister=(contactForm:NgForm)=>{
    console.log(contactForm.value);
    console.log(`${this.user.username}`);
  }

}
