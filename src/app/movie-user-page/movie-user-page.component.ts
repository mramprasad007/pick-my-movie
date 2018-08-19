import { AppService } from './../app-service.service';
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
	constructor(public appService: AppService) {
		this.imageList = this.appService.getImageList();
		this.eventList = this.appService.getEventList();
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
