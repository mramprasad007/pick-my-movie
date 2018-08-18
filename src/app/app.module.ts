import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MovieUserPageComponent } from './movie-user-page/movie-user-page.component';
import { MovieAdminPageComponent } from './movie-admin-page/movie-admin-page.component';
import { MatToolbarModule } from '@angular/material/toolbar';
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
		FlexLayoutModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
