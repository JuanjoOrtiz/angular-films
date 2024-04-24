import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';

const routes: Routes = [
  {path: '', component: HomeLayoutComponent},
  {path: 'films', loadChildren: ()=> import('../films/films.module').then(m => m.FilmsModule)},
  {path: 'actors', loadChildren: ()=> import('../actors/actors.module').then(m => m.ActorsModule)}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
