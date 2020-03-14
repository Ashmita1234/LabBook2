import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

Id:string=' ';
Name:string=' ';
Salary:string=' ';
Department:string=' ';

  constructor() {
   }

  ngOnInit(): void {
  }

  // onSubmit()
  // {
  //   this.Id=(<HTMLInputElement>event.target).value;
  //   this.Name=(<HTMLInputElement>event.target).value;
  //   this.Salary=(<HTMLInputElement>event.target).value;
  //   this.Department=(<HTMLInputElement>event.target).value;
  // }

  onClick()
  {
     alert(this.Id+" "+this.Name+" "+this.Salary+" "+this.Department);
  }

}
