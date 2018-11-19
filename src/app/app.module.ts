import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule , routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import {MatDividerModule} from '@angular/material/divider';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ViewCaseComponent } from './case/view-case/view-case.component';
import {MatTreeModule} from '@angular/material/tree';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import { ListViewComponent } from './case/view-case/list-view/list-view.component';
import { WindowFrameComponent } from './window-frame/window-frame.component';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';
import { MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatRadioModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { CaseEditComponent } from './case/view-case/case-edit/case-edit.component';
import { CaseEditreSolutionComponent } from './case/view-case/case-editre-solution/case-editre-solution.component';
import { OpenDatabaseComponent } from './file/open-database/open-database.component';
import { ImportCasesComponent } from './file/import/import-cases/import-cases.component';
import { TransmitCasesComponent } from './file/export/transmit-cases/transmit-cases.component';
import { CasImportComponent } from './cas-import/cas-import.component';
import { TreeModule } from 'angular-tree-component';
import { RunCaseComponent } from './run-case/run-case.component';
import { ControlListComponent } from './control-list/control-list.component';
import { NewDatabaseComponent } from './file/new-database/new-database.component';
import { SharedFollowUpComponent } from './file/import/shared-follow-up/shared-follow-up.component';
import { ReloadCasesComponent } from './file/import/reload-cases/reload-cases.component';
import { ExportCasesComponent } from './file/export/export-cases/export-cases.component';
import { RetransmitCasesComponent } from './file/export/retransmit-cases/retransmit-cases.component';
import { CountsReportsComponent } from './file/export/callForData/counts-reports/counts-reports.component';
import { BatchEditsComponent } from './file/export/callForData/batch-edits/batch-edits.component';
import { OneButtonExportComponent } from './file/export/callForData/one-button-export/one-button-export.component';
import { ExportDataComponent } from './file/export/callForData/export-data/export-data.component';
import { ReExportDataComponent } from './file/export/callForData/re-export-data/re-export-data.component';
import { RqrsExportDataComponent } from './file/export/rqrs/rqrs-export-data/rqrs-export-data.component';
import { RqrsBatchEditComponent } from './file/export/rqrs/rqrs-batch-edit/rqrs-batch-edit.component';
import { BackupMostRecentComponent } from './file/export/backup-most-recent/backup-most-recent.component';
import { UnloadComponent } from './file/export/unload/unload.component';
import { SurvivorshipExportCarePlanComponent } from './file/export/survivorship/survivorship-export-care-plan/survivorship-export-care-plan.component';
import { SurvivorshipTimelessnessReportComponent } from './file/export/survivorship/survivorship-timelessness-report/survivorship-timelessness-report.component';
import { SurvivorshipConfigurationComponent } from './file/export/survivorship/survivorship-configuration/survivorship-configuration.component';
import { SurvivorshipTemplateEditorComponent } from './file/export/survivorship/survivorship-template-editor/survivorship-template-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    // ViewCaseComponent,
    ListViewComponent,
    WindowFrameComponent,
    routingComponents,
    CaseEditComponent,
    CaseEditreSolutionComponent,
    OpenDatabaseComponent,
    ImportCasesComponent,
    TransmitCasesComponent,
    CasImportComponent,
    RunCaseComponent,
    ControlListComponent,
    NewDatabaseComponent,
    SharedFollowUpComponent,
    ReloadCasesComponent,
    ExportCasesComponent,
    RetransmitCasesComponent,
    CountsReportsComponent,
    BatchEditsComponent,
    OneButtonExportComponent,
    ExportDataComponent,
    ReExportDataComponent,
    RqrsExportDataComponent,
    RqrsBatchEditComponent,
    BackupMostRecentComponent,
    UnloadComponent,
    SurvivorshipExportCarePlanComponent,
    SurvivorshipTimelessnessReportComponent,
    SurvivorshipConfigurationComponent,
    SurvivorshipTemplateEditorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatDividerModule,
    MatTreeModule,
    MatIconModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    FormsModule,
    ReactiveFormsModule,
    AgGridModule.withComponents([]),
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatSelectModule,
    MatTableModule,
    MatIconModule,
    MatTabsModule,
    TreeModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
