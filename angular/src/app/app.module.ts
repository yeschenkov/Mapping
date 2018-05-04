import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { FormsModule } from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { AuthenticationService } from './authentication.service';
import { AuthGuardService } from './auth-guard.service';
import { CreateRouteComponent } from './create-route/create-route.component';
import { RoutesListComponent } from './routes-list/routes-list.component';
import { AgmDirectionModule } from 'agm-direction';
import { ApiService } from './api.service';

const googleMapsCore = AgmCoreModule.forRoot({
	apiKey : 'AIzaSyAey4LJYx_Qh2H4XQC6u0KHZvBRqeLlfoY',
});

@NgModule({
	declarations: [
		AppComponent,
		LoginComponent,
		HomeComponent,
		RegisterComponent,
		CreateRouteComponent,
		RoutesListComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		AppRoutingModule,
		googleMapsCore,
		AgmDirectionModule,
		FormsModule,
		MatToolbarModule,
		MatSidenavModule,
		MatListModule,
		MatButtonModule,
		MatIconModule,
		MatCardModule,
		MatInputModule,
		HttpClientModule
	],
	providers: [
		AuthenticationService,
		AuthGuardService,
		ApiService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
