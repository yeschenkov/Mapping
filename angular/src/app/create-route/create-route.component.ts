import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
	selector: 'app-create-route',
	templateUrl: './create-route.component.html',
	styleUrls: ['./create-route.component.css']
})
export class CreateRouteComponent implements OnInit {
	zoom = 13;

	// initial center position for the map
	lat = 50.44998985466181;
	lng = 30.524107217788696;
	public direction: any = null;
	public markers: Array<Marker> = [];
	constructor(private api: ApiService) { }

	ngOnInit() {
	}
	mapClicked($event: MouseEvent) {
		this.markers.push({
			lat: $event['coords'].lat,
			lng: $event['coords'].lng,
			draggable: true
		});
	}
	getDirection() {
		this.direction = {
			origin: { lat: this.markers[0].lat, lng: this.markers[0].lng },
			destination: { lat: this.markers[0].lat, lng: this.markers[0].lng },
			waypoints: this.markers.slice(1).map(marker => new Object({
				location: {
					lat: marker.lat,
					lng: marker.lng
				}
			}))
		};
	}
	saveDirection() {
		this.api.saveDirection(this.direction);
		// this.direction = null;
	}
}
interface Marker {
	lat: number;
	lng: number;
	label?: string;
	draggable: boolean;
}
