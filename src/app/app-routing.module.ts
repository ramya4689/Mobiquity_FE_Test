import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from './pages/details/details.component';
import { LandingComponent } from './pages/landing/landing.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', component: LandingComponent},
  { path: 'details', component: DetailsComponent},
  { path: 'details/:city', component: DetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
