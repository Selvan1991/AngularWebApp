import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StudentlistComponent } from './component/studentlist/studentlist.component';
import { MenubarComponent } from './component/menubar/menubar.component';
import { AddstudentpopupComponent } from './component/addstudentpopup/addstudentpopup.component';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AdddepartmentpopupComponent } from './component/adddepartmentpopup/adddepartmentpopup.component';
import { MatCardModule } from '@angular/material/card';
import { DepartmentlistComponent } from './component/departmentlist/departmentlist.component';

@NgModule({
  declarations: [
    AppComponent,
    MenubarComponent,
    StudentlistComponent,
    AddstudentpopupComponent,
    AdddepartmentpopupComponent,
    DepartmentlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
