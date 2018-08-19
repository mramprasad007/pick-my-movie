import { AppService } from './../app-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-movie-admin-page',
	templateUrl: './movie-admin-page.component.html',
	styleUrls: ['./movie-admin-page.component.scss']
})
export class MovieAdminPageComponent implements OnInit {
	eventHeader = '';
	eventPlace = '';
	eventTime = '';
	constructor(public appService: AppService) {}
	addEvent() {
		if (
			this.eventHeader !== '' &&
			this.eventPlace !== '' &&
			this.eventTime !== ''
		) {
			this.appService.addEvent({
				imageUrl:
					'assets/img/card' +
					(Math.floor(Math.random() * 6) + 1) +
					'.jpg',
				eventHeader: this.eventHeader,
				eventPlace: this.eventPlace,
				eventTime: this.eventTime
			});
			this.eventHeader = '';
			this.eventPlace = '';
			this.eventTime = '';
		} else {
			alert('Please provide inputs in all the fields');
		}
	}
	deleteEvent(index) {
		this.appService.deleteEvent(index);
	}

	ngOnInit() {}
}
