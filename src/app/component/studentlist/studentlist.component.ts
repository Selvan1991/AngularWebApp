import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddstudentpopupComponent } from '../addstudentpopup/addstudentpopup.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { StudentService } from 'src/app/service/student.service';
import { StudentDetails } from 'src/app/model/StudentDetails';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.scss']
})
export class StudentlistComponent {

  studentylist !: StudentDetails[];

  constructor(private dialog: MatDialog, private service: StudentService) {

  }

  dataSource: any;
  displayedColumns: string[] = ["studentname", "course", "specialization", "percentage", "department", "action"];
  @ViewChild(MatPaginator) paginatior !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;


  Openpopup(code: any, title: any, component: any) {
    var _popup = this.dialog.open(component, {
      width: '40%',
      enterAnimationDuration: '1000ms',
      exitAnimationDuration: '1000ms',
      data: {
        title: title,
        code: code
      }
    });
    _popup.afterClosed().subscribe(item => {

      this.loadstudentdetail();
    })
  }

  ngOnInit(): void {

    this.loadstudentdetail();
  }
  async addstudentdetails() {
    this.Openpopup(0, 'Add Student', AddstudentpopupComponent);
  }
  async editstudentdetails(code: any) {
    this.Openpopup(code, 'Edit Student', AddstudentpopupComponent);
  }

  async detailstudentdetails(code: any) {

    this.Openpopup(code, 'Student Detail', AddstudentpopupComponent);
  }
  Filterchange(data: Event) {
    const value = (data.target as HTMLInputElement).value;
    this.dataSource.filter = value;
  }
  async deletestudentdetail(studentid: any) {
    this.service.DeleteStudentDetailById(studentid).subscribe(resp => {

      if (resp != '' && resp === 'Deleted Successfully')
        this.loadstudentdetail();
    })
  }
  async loadstudentdetail() {

    this.service.GetStudentDetailList().subscribe(resp => {

      this.studentylist = resp;

      this.dataSource = new MatTableDataSource<StudentDetails>(this.studentylist);
      this.dataSource.paginator = this.paginatior;
      this.dataSource.sort = this.sort;

    })
  }

}
