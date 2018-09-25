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
import { ViewCaseComponent } from './view-case/view-case.component';
import {MatTreeModule} from '@angular/material/tree';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import { ListViewComponent } from './view-case/list-view/list-view.component';
import { WindowFrameComponent } from './window-frame/window-frame.component';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import { CaseEditComponent } from './view-case/case-edit/case-edit.component';
import { CaseEditreSolutionComponent } from './view-case/case-editre-solution/case-editre-solution.component';
import { OpenDatabaseComponent } from './open-database/open-database.component';
import { ImportCasesComponent } from './import-cases/import-cases.component';
import { TransmitCasesComponent } from './transmit-cases/transmit-cases.component';


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
    TransmitCasesComponent
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
    FormsModule,
    ReactiveFormsModule,
    AgGridModule.withComponents([]),
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatSelectModule,
    MatTableModule,
    MatIconModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
