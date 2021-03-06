import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
    selector: 'app-list-csr',
    templateUrl: './list-csr.component.html',
    styleUrls: ['./list-csr.component.css']
})
export class ListCsrComponent implements OnInit {

    public pendingCertificates;
    public rejectedCertificates;

    constructor(
        private http: HttpClient,
        private router: Router,
    ) {
    }

    ngOnInit() {
        this.getPendingCertificates();
        this.getRejectedCertificates();
    }

    private getPendingCertificates() {
        this.http.get('http://192.168.33.14:8080/list-pending-csr', {observe: 'response'}).subscribe(res => {
            if (res.status === 200) {
                this.pendingCertificates = res.body;
            }
        });
    }

    private getRejectedCertificates() {
        this.http.get('http://192.168.33.14:8080/list-rejected-csr', {observe: 'response'}).subscribe(res => {
            if (res.status === 200) {
                this.rejectedCertificates = res.body;
            }
        });
    }

    goTo(dest: string) {
        this.router.navigateByUrl(dest);
    }
}
