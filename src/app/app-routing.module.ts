import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//imported components
import { ViewComponent } from './view/view.component';
import { ViewCaseComponent } from './case/view-case/view-case.component';
import { OpenDatabaseComponent } from './file/open-database/open-database.component';
import { NewDatabaseComponent } from './file/new-database/new-database.component';
import { HomeComponent } from './home/home.component';
import { ImportCasesComponent } from './file/import/import-cases/import-cases.component';
import { TransmitCasesComponent } from './file/export/transmit-cases/transmit-cases.component';
import { CasImportComponent } from './cas-import/cas-import.component';
import { RunCaseComponent } from './run-case/run-case.component';
import { ControlListComponent } from './control-list/control-list.component';
import { SharedFollowUpComponent } from './file/import/shared-follow-up/shared-follow-up.component';
import { ReloadCasesComponent } from './file/import/reload-cases/reload-cases.component';
import { ExportCasesComponent } from './file/export/export-cases/export-cases.component';
import { RetransmitCasesComponent } from './file/export/retransmit-cases/retransmit-cases.component';
import { CountsReportsComponent } from './file/export/callForData/counts-reports/counts-reports.component';
import { BatchEditsComponent } from './file/export/callForData/batch-edits/batch-edits.component';
import { OneButtonExportComponent } from './file/export/callForData/one-button-export/one-button-export.component';
import { ExportDataComponent } from './file/export/callForData/export-data/export-data.component';
import { ReExportDataComponent } from './file/export/callForData/re-export-data/re-export-data.component';
import { RqrsBatchEditComponent } from './file/export/rqrs/rqrs-batch-edit/rqrs-batch-edit.component';
import { RqrsExportDataComponent } from './file/export/rqrs/rqrs-export-data/rqrs-export-data.component';
import { BackupMostRecentComponent } from './file/export/backup-most-recent/backup-most-recent.component';
import { UnloadComponent } from './file/export/unload/unload.component';
import { SurvivorshipExportCarePlanComponent } from './file/export/survivorship/survivorship-export-care-plan/survivorship-export-care-plan.component';
import { SurvivorshipTimelessnessReportComponent } from './file/export/survivorship/survivorship-timelessness-report/survivorship-timelessness-report.component';
import { SurvivorshipConfigurationComponent } from './file/export/survivorship/survivorship-configuration/survivorship-configuration.component';
import { SurvivorshipTemplateEditorComponent } from './file/export/survivorship/survivorship-template-editor/survivorship-template-editor.component';

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
  {path: 'shared-follow-up', component: SharedFollowUpComponent},
  {path: 'reload-cases', component: ReloadCasesComponent},
  {path: 'export-cases', component: ExportCasesComponent},
  {path: 'retransmit-cases', component: RetransmitCasesComponent},
  {path: 'callForData/counts-reports', component: CountsReportsComponent},
  {path: 'callForData/batch-edits', component: BatchEditsComponent},
  {path: 'callForData/one-button-export', component: OneButtonExportComponent},
  {path: 'callForData/export-data', component: ExportDataComponent},
  {path: 'callForData/re-export-data', component: ReExportDataComponent},
  {path: 'rqrs/batch-edit', component: RqrsBatchEditComponent},
  {path: 'rqrs/export-data', component: RqrsExportDataComponent},
  {path: 'backup-most-recent', component: BackupMostRecentComponent},
  {path: 'unload', component: UnloadComponent},
  {path: 'survivorship/export-care-plan', component: SurvivorshipExportCarePlanComponent},
  {path: 'survivorship/timelessness-report', component: SurvivorshipTimelessnessReportComponent},
  {path: 'survivorship/configuration', component: SurvivorshipConfigurationComponent},
  {path: 'survivorship/template-editor', component: SurvivorshipTemplateEditorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// 'routingComponents'  has declared in app.module.ts so that all components are imported

export const routingComponents = [ViewComponent,ViewCaseComponent]
