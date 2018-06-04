import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './auth-guard.service';
import { RegisterComponent } from './register/register.component';
import { CreateRouteComponent } from './create-route/create-route.component';
import { RoutesListComponent } from './routes-list/routes-list.component';

const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		redirectTo: 'home'
	},
	{
		path: 'login',
		component: LoginComponent
	},
	{
		path: 'register',
		component: RegisterComponent
	},
	{
		path: 'home',
		component: HomeComponent,
		canActivate: [AuthGuardService],
		children: [
			{ path: '', redirectTo: 'create', pathMatch: 'full' },
			{
				path: 'create',
				component: CreateRouteComponent,
			},
			{
				path: 'list',
				component: RoutesListComponent,
			}
		]
	},
	{
		path: '**',
		redirectTo: 'home',
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes, { useHash: false })],
	exports: [RouterModule]
})
export class AppRoutingModule { }
