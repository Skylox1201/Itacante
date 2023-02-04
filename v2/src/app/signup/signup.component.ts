import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  userEmail!: string;
  userPseudo!: string;
  userPassword!: string;
  userPasswordVerif!: string;

  constructor() { }

  ngOnInit(): void {

  }

  onSubmitForm(form: NgForm): void {
    console.log(form.value);
  }

}
