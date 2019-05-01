import {Component, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
    selector: 'app-new-csr',
    templateUrl: './new-csr.component.html',
    styleUrls: ['./new-csr.component.css']
})
export class NewCsrComponent implements OnInit {

    @ViewChild('content') content;

    constructor(
        private http: HttpClient,
        private router: Router,
    ) {
    }

    ngOnInit() {
    }

    submit() {
        const requestContent = this.content.nativeElement.value;
        this.http.post('http://192.168.33.14:8080/new-csr', {
                content: requestContent,
            },
            {observe: 'response'}).subscribe(res => {
            if (res.status === 200) {
                alert('Votre demande a bien été prise en compte.');
                this.content.nativeElement.value = '';
            }
        });
    }

    goTo(dest: string) {
        this.router.navigateByUrl(dest);
    }

}
