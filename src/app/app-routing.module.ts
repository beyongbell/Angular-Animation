import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopOverComponent } from './pop-over/pop-over.component';


const routes: Routes = [
  {
    path: '', component : PopOverComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
