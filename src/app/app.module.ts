import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MovieUserPageComponent } from './movie-user-page/movie-user-page.component';
import { MovieAdminPageComponent } from './movie-admin-page/movie-admin-page.component';
import {
	MatToolbarModule,
	MatSlideToggleModule,
	MatCardModule,
	MatInputModule,
	MatButtonModule
} from '@angular/material';
import { SearchFilterPipe } from './search-filter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './/app-routing.module';
@NgModule({
	declarations: [
		AppComponent,
		MovieUserPageComponent,
		MovieAdminPageComponent,
		SearchFilterPipe
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		MatToolbarModule,
		MatSlideToggleModule,
		MatCardModule,
		FlexLayoutModule,
		MatButtonModule,
		FormsModule,
		MatInputModule,
		AppRoutingModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
