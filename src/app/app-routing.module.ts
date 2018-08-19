import { MovieAdminPageComponent } from './movie-admin-page/movie-admin-page.component';
import { MovieUserPageComponent } from './movie-user-page/movie-user-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
	{ path: '', redirectTo: '/user', pathMatch: 'full' },
	{ path: 'user', component: MovieUserPageComponent },
	{ path: 'admin', component: MovieAdminPageComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
