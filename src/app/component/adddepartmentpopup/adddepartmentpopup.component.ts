import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { StudentService } from 'src/app/service/student.service';

@Component({
  selector: 'app-adddepartmentpopup',
  templateUrl: './adddepartmentpopup.component.html',
  styleUrls: ['./adddepartmentpopup.component.scss']
})
export class AdddepartmentpopupComponent implements OnInit {

  inputdata: any;
  editdata: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private ref: MatDialogRef<AdddepartmentpopupComponent>, 
  private buildr: FormBuilder,private service: StudentService) {

}
ngOnInit(): void {
   this.inputdata = this.data;
   
  if(this.inputdata.code>0){
    this.setpopupdata(this.inputdata.code)
  }
}

async setpopupdata(code: any) {
  this.service.GetDepartmentById(code).subscribe(item => {
    this.editdata = item;
    
    this.departmentform.setValue({departmentname:this.editdata.departmentName, departmentid : this.editdata.departmentID})
  });
}
departmentform = this.buildr.group({
  departmentname: this.buildr.control(''),
  departmentid: this.buildr.control('')
});
// departmentform = this.buildr.group({
//   departmentname: ['', Validators.required],
//   password: ['', [Validators.required,Validators.minLength(6)]],
//   confirmpassword: ['', Validators.required],
//   UserAddress: this.fb.group({
//   city: ['', Validators.required],
//   state: ['', Validators.required],    
//   pincode: ['', [Validators.required,Validators.pattern('^[0-9]$')]],    
// }),

// });
async closepopup() {
  this.ref.close('Closed using function');
}
async Savedepartment() {
  this.departmentform.value;
  if(this.departmentform.value.departmentid ==='')
  {
    this.departmentform.value.departmentid = '0';
  }

  this.service.savedepartment(this.departmentform.value).subscribe(res => {
    if(this.departmentform.value.departmentid ==='')
  {
    alert('Department has been Added Successfully');
  }
  else{
    alert('Department has been updated Successfully');
  }
    
    this.closepopup();
  });
 }
}
