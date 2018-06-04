import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class ApiService {
	constructor(private auth: AuthenticationService) { }

	saveDirection(direction: Object) {
		const url = '/api/direction';
		this.auth.httpPost(url, direction).subscribe(res => res);
	}
	getDirections() {
		const url = '/api/direction';
		return this.auth.httpGet(url);
	}
}
