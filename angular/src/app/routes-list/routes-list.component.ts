import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
	selector: 'app-routes-list',
	templateUrl: './routes-list.component.html',
	styleUrls: ['./routes-list.component.css']
})
export class RoutesListComponent implements OnInit {

	public directions: Array<Object> = [];
	constructor(
		private api: ApiService
	) {
		this.api.getDirections().subscribe(res => {
			this.directions = res['directions'];
			console.log(this.directions);
		});
	}

	ngOnInit() {
	}

}
