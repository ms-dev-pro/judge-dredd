import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
    selector: 'app-list-csr',
    templateUrl: './list-csr.component.html',
    styleUrls: ['./list-csr.component.css']
})
export class ListCsrComponent implements OnInit {

    public certificates;

    constructor(
        private http: HttpClient
    ) {
    }

    ngOnInit() {
        this.getPendingCertificates();
    }

    private getPendingCertificates() {
        this.http.get('http://192.168.33.14:8080/list-pending-csr', {observe: 'response'}).subscribe(res => {
            if (res.status === 200) {
                alert('LOADED');
                console.log(res);
            }
        });
    }
}
