import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
    selector: 'app-details-csr',
    templateUrl: './details-cert.component.html',
    styleUrls: ['./details-cert.component.css']
})
export class DetailsCertComponent implements OnInit {
    private id: string;
    private mode: string;
    public cert;

    constructor(
        private route: ActivatedRoute,
        private http: HttpClient,
    ) {
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.id = params.id;
            this.mode = params.mode;
            this.getCsrDetails();
        });
    }

    private getCsrDetails() {
        this.http.get(
            'http://192.168.33.14:8080/details-cert?mode=' + this.mode + '&id=' + this.id,
            {observe: 'response'}
        ).subscribe(res => {
            if (res.status === 200) {
                console.log(res.body);
            }
        });
    }

}
