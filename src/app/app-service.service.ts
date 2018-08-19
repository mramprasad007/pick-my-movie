import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class AppService {
	imageList = [
		{
			imageUrl: 'assets/img/event1.jpg',
			active: true
		},
		{
			imageUrl: 'assets/img/event2.jpg',
			active: false
		},
		{
			imageUrl: 'assets/img/event3.jpg',
			active: false
		}
	];
	eventList = [
		{
			imageUrl: 'assets/img/card1.jpg',
			eventHeader: 'Sunburn Festival',
			eventPlace: 'Chennai',
			eventTime: 'Jan - Dec'
		},
		{
			imageUrl: 'assets/img/card2.jpg',
			eventHeader: 'Bay Waatch',
			eventPlace: 'Chennai',
			eventTime: 'Jan - Dec'
		},
		{
			imageUrl: 'assets/img/card3.jpg',
			eventHeader: 'Snow Strom',
			eventPlace: 'Chennai',
			eventTime: 'Jan - Dec'
		},
		{
			imageUrl: 'assets/img/card4.jpg',
			eventHeader: 'Island Camping',
			eventPlace: 'Chennai',
			eventTime: 'Jan - Dec'
		},
		{
			imageUrl: 'assets/img/card5.jpg',
			eventHeader: 'Silver Storm',
			eventPlace: 'Chennai',
			eventTime: 'Jan - Dec'
		}
	];
	constructor() {}
	getImageList() {
		return this.imageList;
	}
	getEventList() {
		return this.eventList;
	}
	addEvent(event) {
		this.eventList.push(event);
	}
	deleteEvent(index) {
		this.eventList.splice(index, 1);
	}
}
