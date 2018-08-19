import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MovieUserPageComponent } from './movie-user-page/movie-user-page.component';
import { MovieAdminPageComponent } from './movie-admin-page/movie-admin-page.component';
import { MatToolbarModule, MatSlideToggleModule } from '@angular/material';
@NgModule({
	declarations: [
		AppComponent,
		MovieUserPageComponent,
		MovieAdminPageComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		MatToolbarModule,
		MatSlideToggleModule,
		FlexLayoutModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
