import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employee: Employee = new Employee();
  constructor(private employeeService: EmployeeService,
    private router: Router) { }

  ngOnInit(): void {
    // this.Form = new FormGroup({
    //   name: new FormControl(this.hero.name, [
    //     Validators.required,
    //     Validators.minLength(4),
    //     forbiddenNameValidator(/bob/i) // <-- Here's how you pass in the custom validator.
    //   ]),
    //   alterEgo: new FormControl(this.hero.alterEgo),
    //   power: new FormControl(this.hero.power, Validators.required)
    // });
  
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
// function forbiddenNameValidator(arg0: RegExp): import("@angular/forms").ValidatorFn {
//   throw new Error('Function not implemented.');
// }

