import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})



export class LoginComponent implements OnInit {
  password: string = "";
  email: string = "";
  text: string = "";
  color: string = "";
  background: string = "";
  private _jsonURL = 'assets/usersDB.json';
  valid: boolean = false;
  users!: any[];

  constructor(private http: HttpClient, private router: Router) {
  }

  ngOnInit(): void {
    this.getJSON().subscribe(data => {
      this.users = data;
    });
  }

  public getJSON(): Observable<any> {
    return this.http.get(this._jsonURL);
  }

  validateEmail(event: any) {

    var validRegex = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

    if (this.email.match(validRegex)) {
      this.color = "green";
      this.background = "greenyellow";
      this.text = "Valid Email";
    } else {
      this.color = "red";
      this.background = "maroon";
      this.text = "Please Enter valid Email";
    }
  }

  validateAccount() {
    for (var i = 0; i < this.users.length; i++) {
      if (this.users[i].Email === this.email && this.users[i].Password === this.password) {
        this.router.navigate(['/movies']);
        this.valid = true;
      }
    }

    if (this.valid === false) {
      this.color = "red";
      this.background = "maroon";
      this.text = "Invalid Username or Password";
    }
    console.log(this.users[0].Email);
  }
  ramadan() {
    document.body.style.backgroundImage = "url('https://i.gifer.com/3eZ7.gif')";
  }
}