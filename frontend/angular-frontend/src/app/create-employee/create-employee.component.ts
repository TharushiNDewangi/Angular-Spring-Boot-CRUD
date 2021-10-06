import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  exform: FormGroup;
  employee: Employee = new Employee();
  constructor(private employeeService: EmployeeService,
    private router: Router) { }

  ngOnInit(): void {
    
  this.exform = new FormGroup({
    'firstName' : new FormControl(null, Validators.required),
    'lname' : new FormControl(null, Validators.required),
    'email' : new FormControl(null, [Validators.required, Validators.email])
  });
  
  } 
  get firstName() {
    return this.exform.get('firstName');
  }
  get email() {
    return this.exform.get('email');
  }
  get lname() {
    return this.exform.get('lname');
  }

  saveEmployee(){
    this.employeeService.createEmployee(this.employee).subscribe( data =>{
      console.log(data);
      this.goToEmployeeList();
    },
    error => console.log(error));
  }

  goToEmployeeList(){
    this.router.navigate(['/employees']);
  }
  
  onSubmit(){
    console.log(this.employee);
    this.saveEmployee();
  }
}


