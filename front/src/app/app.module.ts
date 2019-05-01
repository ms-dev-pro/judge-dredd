import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
    MatButtonModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule, MatListModule,
    MatSelectModule,
    MatToolbarModule
} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import { CoreComponent } from './components/core/core.component';
import { NewCsrComponent } from './components/new-csr/new-csr.component';
import { ListCsrComponent } from './components/list-csr/list-csr.component';
import { DetailsCertComponent } from './components/details-cert/details-cert.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CoreComponent,
    NewCsrComponent,
    ListCsrComponent,
    DetailsCertComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatFormFieldModule,
        MatSelectModule,
        MatInputModule,
        MatButtonModule,
        HttpClientModule,
        MatToolbarModule,
        MatIconModule,
        MatGridListModule,
        MatListModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
