import { Component, OnInit  } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements  OnInit {

  employees: Employee[] = [];

  constructor(private employeeService: EmployeeService, private router: Router) { }

  ngOnInit(): void {

    this.getEmployees();

  }

  private getEmployees(){
    this.employeeService.getEmployeeList().subscribe(data => { // subscribe to the getEmployeeList method
      this.employees =data;
    })
  }

  employeeDetails(id:number){
    this.router.navigate(['employee-details', id]); // navigate to the employee-details page
  }

  updateEmployee(id: number){

    this.router.navigate(['update-employee', id]); // navigate to the update-employee page
  }
  deleteEmployee(id: number){
    this.employeeService.deleteEmployee(id).subscribe(data => { // subscribe to the deleteEmployee method
      console.log(data);
      this.getEmployees();
    })

  }

  }


