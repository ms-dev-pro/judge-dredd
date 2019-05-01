import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
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
    displayedColumns: string[] = ['key', 'value'];
    public dataSource: any[];

    constructor(
        private route: ActivatedRoute,
        private router: Router,
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
            'http://192.168.33.14:8080/details-cert?state=' + this.mode + '&id=' + this.id,
            {observe: 'response'}
        ).subscribe(res => {
            if (res.status === 200) {
                this.cert = res.body;
                this.dataSource = this.certToDataSource(this.cert)
            }
        });
    }

    private certToDataSource(cert) {
        const dataSource = [];
        dataSource.push({key: 'Country', value: cert.C});
        dataSource.push({key: 'Common name', value: cert.CN});
        dataSource.push({key: 'City/Locality', value: cert.L});
        dataSource.push({key: 'Organization', value: cert.O});
        dataSource.push({key: 'Organizational Unit', value: cert.OU});
        dataSource.push({key: 'State/Province', value: cert.ST});
        dataSource.push({key: 'Key algorithm', value: cert.key_algo});
        dataSource.push({key: 'Key size', value: cert.key_size});
        return dataSource;
    }

    goTo(dest: string) {
        this.router.navigateByUrl(dest);
    }
}
