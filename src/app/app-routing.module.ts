import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { StreamComponent } from './stream/stream.component';

const routes: Routes = [
  {path:"dashboard",component:DashboardComponent,
  children:[
            {path:"home",component:HomeComponent},
            {path:"movies",loadChildren:()=>import('./movies/movies.module').then(m=>m.MoviesModule)},
            {path:"stream",component:StreamComponent},
            {path:"",component:HomeComponent},
            {path:"**",component:HomeComponent},
  ]},
  {path:"",component:DashboardComponent,
  children:[
            {path:"",component:HomeComponent}
  ]},
  {path:"**",component:DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
