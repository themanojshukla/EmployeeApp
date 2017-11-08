import { Component, NgModule, Input } from "@angular/core";
import { NgIf } from '@angular/common';
import {
    ReactiveFormsModule,
    FormsModule,
    FormGroup,
    FormControl,
    Validators,
    FormBuilder
} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';


@Component({
    selector: 'employee-details',
    templateUrl: './../templates/employeeDetails.component.html',
})

export class EmployeeDetailsComponent {
    
   @Input() employee : any ;
 
  onSubmit() {
      console.log("Form Submitted!");
    }
}