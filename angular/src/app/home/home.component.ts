import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	zoom= 8;

	// initial center position for the map
	lat = 51.673858;
	lng = 7.815982;
	constructor() { }

	ngOnInit() {
	}

}
