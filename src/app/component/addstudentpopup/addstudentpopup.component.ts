import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { StudentService } from 'src/app/service/student.service';

@Component({
  selector: 'app-addstudentpopup',
  templateUrl: './addstudentpopup.component.html',
  styleUrls: ['./addstudentpopup.component.scss']
})
export class AddstudentpopupComponent implements OnInit {

  inputdata: any;
  editdata: any;
  selectedFW = new FormControl();
  departmentlist: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private ref: MatDialogRef<AddstudentpopupComponent>,
    private buildr: FormBuilder, private service: StudentService) {

  }

  ngOnInit(): void {
    this.inputdata = this.data;
    if (this.inputdata.code > 0) {
      this.setpopupdata(this.inputdata.code)
    }

    this.getdepartmentlist();
  }

  async setpopupdata(code: any) {
    this.service.GetStudentDetailById(code).subscribe(item => {
      this.editdata = item;

      this.studentform.setValue({
        studentname: this.editdata.studentName, course: this.editdata.course, specialization: this.editdata.specialization,
        percentage: this.editdata.percentage, departmentid: this.editdata.departmentID, studentid: this.editdata.studentID
      })
    });
  }

  async closepopup() {
    this.ref.close('Closed using function');
  }

  studentform = this.buildr.group({
    studentname: this.buildr.control(''),
    course: this.buildr.control(''),
    specialization: this.buildr.control(''),
    percentage: this.buildr.control(''),
    departmentid: this.buildr.control(''),
    studentid: this.buildr.control('')
  });

  async Savestudent() {
    this.studentform.value;
    if (this.studentform.value.studentid === '') {
      this.studentform.value.studentid = '0';
    }

    this.service.savestudentdetails(this.studentform.value).subscribe(res => {
      if (this.inputdata.btntext !== 'Update') {
        alert('Student Records has been Added Successfully');
      }
      else{
        alert('Student Records has been updated Successfully');
      }
      
      this.closepopup();
    });
  }

  async getdepartmentlist() {

    this.service.GetDepartmentList().subscribe(dept => {
      if (dept.length != null) {
        this.departmentlist = dept;

      }
    });
  }

}
