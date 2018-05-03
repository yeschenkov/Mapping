import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	public credentials = {
		email: '',
		password: ''
	};
	constructor(private auth: AuthenticationService, private router: Router) { }

	ngOnInit() {
	}
	login() {
		this.auth.login(this.credentials).subscribe(() => {
			this.router.navigateByUrl('/home');
		}, (err) => {
			console.error(err);
		});
	}
}
