import {Component, OnInit, ViewChild} from '@angular/core';
import {userError} from '@angular/compiler-cli/src/transformers/util';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('username') username;
  @ViewChild('password') password;

  constructor(
      private http: HttpClient
  ) { }

  ngOnInit() {
  }

  login() {
    console.log(this.username.nativeElement.value);
    console.log(this.password.nativeElement.value);
    this.http.post( environment.api + '/login', {
      login: 'foo',
      password: 'bar'
    }).subscribe(res => {
      console.log(res);
    });
  }
}
