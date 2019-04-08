import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { NewPageComponent } from './new-page/new-page.component';
import { CarsPageComponent } from './cars-page/cars-page.component';
import { CarPageComponent } from './car-page/car-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuardService } from './auth-guard.service';

const appRoutes: Routes = [
  { path: 'cars', component: CarsPageComponent, canActivate: [AuthGuardService], children: [
    { path: ':id/:name', component: CarPageComponent }
  ]},
  { path: '', component: HomePageComponent },
  { path: 'new', component: NewPageComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: 'not-found' }
];


@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}