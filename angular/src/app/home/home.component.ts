import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	constructor(private auth: AuthenticationService, private router: Router) { }

	ngOnInit() {
	}
	public logout() {
		this.auth.logout();
		this.router.navigate(['/login']);
	}
}
