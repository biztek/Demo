import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewComponent } from './view/view.component';
import { ViewCaseComponent } from './view-case/view-case.component';

const routes: Routes = [
{path: 'view-find',component: ViewComponent },
{path: 'view-case',component: ViewCaseComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ViewComponent,ViewCaseComponent]
