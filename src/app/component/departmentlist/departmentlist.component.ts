import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { StudentService } from 'src/app/service/student.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { Department } from 'src/app/model/StudentDetails';
import { AdddepartmentpopupComponent } from '../adddepartmentpopup/adddepartmentpopup.component';

@Component({
  selector: 'app-departmentlist',
  templateUrl: './departmentlist.component.html',
  styleUrls: ['./departmentlist.component.scss'],
})
export class DepartmentlistComponent {

  departmentlist !: Department[];

  constructor(private dialog: MatDialog, private service: StudentService) {

  }
  dataSource: any;
  displayedColumns: string[] = ["departmentname", "action"];
  @ViewChild(MatPaginator) paginatior !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;


  Openpopup(code: any, title: any, btntext:any, component: any) {
    var _popup = this.dialog.open(component, {
      width: '40%',
      enterAnimationDuration: '1000ms',
      exitAnimationDuration: '1000ms',
      data: {
        title: title,
        code: code,
        btntext : btntext
      }
    });
    _popup.afterClosed().subscribe(item => {

      this.loaddepartmentlist();
    })
  }
  ngOnInit(): void {
    
    this.loaddepartmentlist();
  }
  async adddepartment() {
    this.Openpopup(0, 'Add Department', 'Save',AdddepartmentpopupComponent);
  }
  Filterchange(data: Event) {
    const value = (data.target as HTMLInputElement).value;
    this.dataSource.filter = value;
  }
  async loaddepartmentlist() {
    this.service.GetDepartmentList().subscribe(resp => {

      this.departmentlist = resp;
      this.dataSource = new MatTableDataSource<Department>(this.departmentlist);
      this.dataSource.paginator = this.paginatior;
      this.dataSource.sort = this.sort;

    })
  }
  async editdepartment(departmentid: any) {
    this.Openpopup(departmentid, 'Edit Department', 'Update', AdddepartmentpopupComponent);

  }
  async deletedepartment(departmentid: any,departmentName : any) {
    if(confirm("Are you sure to delete "+ departmentName)) {
    this.service.DeleteDepartmentById(departmentid).subscribe(resp => {
      if (resp != '' && resp === 'Deleted Successfully')
      alert( departmentName +' has been Deleted Successfully');
        this.loaddepartmentlist();
    })
  }

  }
  async detaildepartment(departmentid: any) {
    this.Openpopup(departmentid, 'Edit Department', 'Detail', AdddepartmentpopupComponent);

  }
}
