import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {


  private baseURL = "http://localhost:8080/api/v1/employees";
  constructor(private httpClient: HttpClient) { }

  getEmployeeList(): Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`${this.baseURL}`);
  }

  createEmployee(employee: Employee): Observable<object>{  // object is the return type of the post method
    return this.httpClient.post(`${this.baseURL}`, employee);  // the post method will return an observable object

  }

  getEmployeeById(id: number): Observable<Employee> {
    return this.httpClient.get<Employee>(`${this.baseURL}/${id}`);
  }

  updateEmployee(id:number, employee: Employee):Observable<object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, employee);  // the put method will return an observable object
  }
  
}
