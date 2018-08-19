import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-movie-user-page',
	templateUrl: './movie-user-page.component.html',
	styleUrls: ['./movie-user-page.component.scss']
})
export class MovieUserPageComponent implements OnInit {
	imageList = [];
	eventList = [];
	activeImageNo = 0;
	searchText = '';
	constructor() {
		this.imageList = [
			{
				imageUrl: '../../assets/img/event1.jpg',
				active: true
			},
			{
				imageUrl: '../../assets/img/event2.jpg',
				active: false
			},
			{
				imageUrl: '../../assets/img/event3.jpg',
				active: false
			}
		];
		this.eventList = [
			{
				imageUrl: '../../assets/img/card1.jpg',
				eventHeader: 'Sunburn Festival',
				eventPlace: 'Chennai',
				eventTime: 'Jan - Dec'
			},
			{
				imageUrl: '../../assets/img/card2.jpg',
				eventHeader: 'Bay Waatch',
				eventPlace: 'Chennai',
				eventTime: 'Jan - Dec'
			},
			{
				imageUrl: '../../assets/img/card3.jpg',
				eventHeader: 'Snow Strom',
				eventPlace: 'Chennai',
				eventTime: 'Jan - Dec'
			},
			{
				imageUrl: '../../assets/img/card4.jpg',
				eventHeader: 'Island Camping',
				eventPlace: 'Chennai',
				eventTime: 'Jan - Dec'
			},
			{
				imageUrl: '../../assets/img/card5.jpg',
				eventHeader: 'Silver Storm',
				eventPlace: 'Chennai',
				eventTime: 'Jan - Dec'
			}
		];
	}

	ngOnInit() {}

	changeSlideImage(type) {
		if (type === 'next') {
			if (this.activeImageNo + 1 <= this.imageList.length - 1) {
				this.activeImageNo += 1;
				this.resetActiveSlide();
				this.imageList[this.activeImageNo].active = true;
			}
		} else {
			if (this.activeImageNo - 1 >= 0) {
				this.activeImageNo -= 1;
				this.resetActiveSlide();
				this.imageList[this.activeImageNo].active = true;
			}
		}
	}
	onSearchChange(text) {
		console.log(text);
	}

	resetActiveSlide() {
		this.imageList.map((_, i) => {
			this.imageList[i].active = false;
		});
	}
	setSlide(index) {
		this.resetActiveSlide();
		this.imageList[index].active = true;
	}
}
