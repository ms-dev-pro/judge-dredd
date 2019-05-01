import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.css']
})
export class CoreComponent implements OnInit {

  constructor(
      private http: HttpClient,
      private router: Router,
  ) { }

  ngOnInit() {
  }

  logout() {
    this.http.get(
        'http://192.168.33.14:8080/logout',
        {observe: 'response'})
        .subscribe(res => {
          if(res.status === 200){
            this.router.navigateByUrl('/login');
          }
    });
  }

}
