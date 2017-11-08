import { Component } from "@angular/core";
import { NgModule } from '@angular/core';


@Component({
    selector: 'employee-list',
    templateUrl: './../templates/employeeList.component.html',
    styleUrls: ['./../css/employeeList.component.css']
})

export class EmployeeListComponent {

    //Hard coded data for iterations.
    employees: any[] = [
        {
            "id": 1,
            "firstName": "Manoj",
            "lastName": "Shukla",
            "middleName": "Kumar",
            "dateOfBirth": "31-01-1996"
        },
        {
            "id": 2,
            "firstName": "Manish",
            "lastName": "Shukla",
            "middleName": "Kumar",
            "dateOfBirth": "01-01-1996"
        }
    ];

    filterString: String;
    filteredEmployees: any[];
    selectedEmployee: any;

    // Filter effects won't be seen on employee Id column as the string 'EMP00' 
    // is being appended from the html template, not available in employees array.
    // However, the effects can be observed if the filterBy contains any match to
    // id available in employees array.
  
    // onFilterChange(filterBy) {
    //     this.filteredEmployees = this.employees.filter(
    //         // function to apply filter on all columns.
    //         function (el) {
    //             var keys = [];
    //             var values = [];
    //             if (el) {
    //                 keys = Object.keys(el);
    //                 values = Object.values(el);
    //             }
    //             for (var i = 0; i < keys.length; i++) {
    //                 var key = keys[i];
    //                 var currentElement = el[key];
    //                 console.log(typeof currentElement === "string");
    //                 if (typeof currentElement === "string") {
    //                     if (values[i].toLowerCase().indexOf(filterBy.toLowerCase()) > -1) {
    //                         return true;
    //                     }
    //                 }
    //                 else {
    //                     if (values.indexOf(filterBy) > -1) {
    //                         return true;
    //                     }
    //                 }
    //             }
    //         }
    //     );
    // }
    
    onNotify(newEmployees: any): void{
        this.filteredEmployees = newEmployees;
        this.selectedEmployee = null;
    }

    onRowSelection(employee){
        this.selectedEmployee = employee;
    }

    key: string = 'id'; // default sorting option
    reverse: boolean = false;
    
    sort(key){
      this.key = key;
      this.reverse = !this.reverse;
    }

    p: number = 1;
    // filtering only on firstName
    //el =>  el.firstName.toLowerCase().indexOf(filterBy.toLowerCase()) > -1); 

    constructor() {
        this.filteredEmployees = this.employees;
    }

}