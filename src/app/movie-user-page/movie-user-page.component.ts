import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-movie-user-page',
	templateUrl: './movie-user-page.component.html',
	styleUrls: ['./movie-user-page.component.scss']
})
export class MovieUserPageComponent implements OnInit {
	imageList = [];
	activeImageNo = 0;
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
