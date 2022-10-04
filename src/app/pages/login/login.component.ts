import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import * as CryptoJS from "crypto-js";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });
  error: string;
  userData: [];
  constructor(public router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.getUserJSON().subscribe(data => {
      this.userData = data.users;
    });
  }

  public getUserJSON(): Observable<any> {
    return this.http.get("../../../assets/json/users.json");
  }

  submit() {
    if (this.form.valid) {
      if (this.userData.filter((i: any) => (i.email == this.form.value.username) && i.password == this.form.value.password).length > 0) {
        const encryptedPAssword = CryptoJS.AES.encrypt(
          this.form.value.password,
          "secretKey123"
        ).toString();
        localStorage.setItem("userInfo", JSON.stringify({ username: this.form.value.username, password: encryptedPAssword }));
        this.router.navigate(["dashboard"]);
      } else {
        this.error = "Not match with existing user.";
      }
    } else {
      this.error = "Username or password is invalid";
    }
  }

}
