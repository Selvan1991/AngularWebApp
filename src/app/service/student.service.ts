import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Department, StudentDetails } from '../model/StudentDetails';
import { HttpClient } from '@angular/common/http';
import { base_url } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }

  GetStudentDetailList(): Observable<StudentDetails[]> {
    return this.http.get<StudentDetails[]>(`${base_url}Student/GetStudents`);

  }
  GetDepartmentList(): Observable<Department[]> {
    return this.http.get<Department[]>(`${base_url}Department/departmentlist`);
  }

  savestudentdetails(payload: any) {
    return this.http.post(`${base_url}Student/AddStudent`, payload);
  }

  GetStudentDetailById(studentId: any): Observable<StudentDetails[]> {
    return this.http.get<StudentDetails[]>(`${base_url}Student/GetStudentByID/${studentId}`);

  }

  DeleteStudentDetailById(studentId: any) {
    return this.http.delete(`${base_url}Student/DeleteStudent/${studentId}`);

  }
  savedepartment(payload: any) {
    return this.http.post(`${base_url}Department/AddDepartment`, payload);
  }

  GetDepartmentById(departmentId: any): Observable<Department[]> {
    return this.http.get<Department[]>(`${base_url}Department/GetDepartmentByID/${departmentId}`);

  }
  DeleteDepartmentById(departmentId: any) {
    return this.http.delete(`${base_url}Department/DeleteDepartment/${departmentId}`);

  }

}
