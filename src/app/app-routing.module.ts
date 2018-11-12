import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//imported components
import { ViewComponent } from './view/view.component';
import { ViewCaseComponent } from './case/view-case/view-case.component';
import { OpenDatabaseComponent } from './file/open-database/open-database.component';
import { NewDatabaseComponent } from './file/new-database/new-database.component';
import { HomeComponent } from './home/home.component';
import { ImportCasesComponent } from './file/import-cases/import-cases.component';
import { TransmitCasesComponent } from './transmit-cases/transmit-cases.component';
import { CasImportComponent } from './cas-import/cas-import.component';
import { RunCaseComponent } from './run-case/run-case.component';
import { ControlListComponent } from './control-list/control-list.component';

// component url paths
const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'home', component: HomeComponent },
  {path: 'open-database', component: OpenDatabaseComponent },
  {path: 'new-database', component: NewDatabaseComponent},
  {path: 'view-find', component: ViewComponent },
  {path: 'view-case', component: ViewCaseComponent },
  {path: 'import-cases', component: ImportCasesComponent },
  {path: 'transmit-cases', component: TransmitCasesComponent },
  {path: 'cas-import', component: CasImportComponent },
  {path: 'run-case', component: RunCaseComponent },
  {path: 'control-list', component: ControlListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// 'routingComponents'  has declared in app.module.ts so that all components are imported

export const routingComponents = [ViewComponent,ViewCaseComponent]
