import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentlistComponent } from './component/studentlist/studentlist.component';
import { DepartmentlistComponent } from './component/departmentlist/departmentlist.component';

const routes: Routes = [
  {path:'studentlist',component:StudentlistComponent},
  {path:'departmentlist',component:DepartmentlistComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
