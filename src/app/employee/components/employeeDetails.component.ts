import { Component, NgModule, Input, Output, OnInit, OnChanges, EventEmitter } from "@angular/core";
import { NgIf } from '@angular/common';
import {
    FormGroup,
    FormControl,
    Validators
} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';



@Component({
    selector: 'employee-details',
    templateUrl: './../templates/employeeDetails.component.html',
    styleUrls: ['./../css/employeeDetails.component.css']
})

export class EmployeeDetailsComponent {
   @Input() employee: any ;
   @Input() employees: any ;
   
   @Output() notify: EventEmitter<any> = new EventEmitter<any>();
   form;
   payLoad = null;
   updateForm;
   updateGroup:any = {};
  

    ngOnChanges(): void{
        if(this.employee){
        this.updateGroup.id = new FormControl(this.employee.id,Validators.required);
        this.updateGroup.firstName =  new FormControl(this.employee.firstName, Validators.required);
        this.updateGroup.middleName = new FormControl(this.employee.middleName, Validators.required);
        this.updateGroup.lastName = new FormControl(this.employee.lastName, Validators.required);
        this.updateGroup.dateOfBirth = new FormControl(this.employee.dateOfBirth,Validators.required);
        this.updateForm = new FormGroup(this.updateGroup);
        }
    }

    resetAddForm(): void {
        let group:any = {};
        group.firstName =  new FormControl('', Validators.required);
        group.middleName = new FormControl('', Validators.required);
        group.lastName = new FormControl('', Validators.required);
        group.dateOfBirth = new FormControl('',Validators.required);
        this.form = new FormGroup(group);   
    }

   constructor() {
        this.resetAddForm();
   }

   onSubmit() {
       this.payLoad = this.form.value;
       new EmployeeDetailsComponent();
       var temp : any[]= this.employees;

       var length = temp.length;
       var last;
       if(length === 0){
        this.payLoad.id = 1;
       }
       else{
        last= length-1;
        this.payLoad.id = temp[last].id+1;
       }
      
       temp.push(this.payLoad );
       this.notify.emit(temp);
        this.resetAddForm();
       
   }

   deleteEmp(id){
    var temp : any[]= this.employees;
    var index = temp.findIndex((obj => obj.id == id ));
    temp.splice(index, 1);
    //console.log(temp);
    this.notify.emit(temp);
   }

   onUpdate() {
       this.payLoad = this.updateForm.value;
       
       var temp : any[]= this.employees;
       var objIndex = temp.findIndex((obj => obj.id == this.payLoad.id ));
       temp[objIndex].firstName = this.payLoad.firstName;
       temp[objIndex].middleName = this.payLoad.middleName;
       temp[objIndex].lastName = this.payLoad.lastName;
       temp[objIndex].dateOfBirth = this.payLoad.dateOfBirth;

       this.notify.emit(temp);
   }



}