import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { LoginComponent } from './login/login.component';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list'
import { MatIconModule } from '@angular/material/icon'
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [LoginComponent, DashboardComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    MatCardModule,
    MatInputModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatListModule,
    MatIconModule
  ]
})
export class PagesModule { }
