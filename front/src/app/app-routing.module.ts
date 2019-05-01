import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {CoreComponent} from './components/core/core.component';
import {NewCsrComponent} from './components/new-csr/new-csr.component';
import {ListCsrComponent} from './components/list-csr/list-csr.component';
import {DetailsCertComponent} from './components/details-cert/details-cert.component';

const routes: Routes = [
    {path: '', redirectTo: '/login', pathMatch: 'full'},
    {path: 'login', component: LoginComponent},
    {path: 'core', component: CoreComponent},
    {path: 'new', component: NewCsrComponent},
    {path: 'list-csr', component: ListCsrComponent},
    {path: 'details-cert/:mode/:id', component: DetailsCertComponent}
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
