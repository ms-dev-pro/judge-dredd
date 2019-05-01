import {Component, OnInit, ViewChild} from '@angular/core';
import {userError} from '@angular/compiler-cli/src/transformers/util';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('username') username;
  @ViewChild('password') password;

  constructor(
      private http: HttpClient,
      private router: Router
  ) { }

  ngOnInit() {
  }

  login() {
    const userObject = this.username.nativeElement.value;
    const passwdObject = this.password.nativeElement.value;
    this.http.post( 'http://192.168.33.14:8080/login', {
      user: userObject,
      passwd: passwdObject,
    }).subscribe(res => {
      // @ts-ignore
      if (res.status === 200) {
          this.router.navigateByUrl('/core');
      }
    });
  }
}
