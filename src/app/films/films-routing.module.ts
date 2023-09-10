import { NgModule, inject } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClient } from '@angular/common/http'

import { FilmsLayoutComponent } from './layouts/films-layout/films-layout.component';
import { FilmsListComponent } from './pages/films-list/films-list.component';

const routes: Routes = [
  {
    path: '',
    component: FilmsLayoutComponent,
    children: [
      { path: '', component: FilmsListComponent },
      { path: '**', redirectTo: '' }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilmsRoutingModule {


  private http = inject(HttpClient);


}
