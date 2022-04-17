import { Component, Inject, Output, EventEmitter } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { FormlyFieldConfig, FormlyFormOptions } from "@ngx-formly/core";
import { TransactionService } from "src/app/dashboard/services/transaction.service";
import { EmployeeConfig } from "src/app/data/configs/employee.config";
import { EmployeeRegistrationService } from "./service/empRegistration.service";

@Component({
    selector: 'employee-modal',
    templateUrl: './employee-modal.component.html',
    styleUrls: ['./employee-modal.component.scss']
})
export class EmployeeModalComponent {

    formConfig: {
        model: any,
        formGroup: FormGroup,
        formOptions: FormlyFormOptions,
        formFields: FormlyFieldConfig[]
    }

    dialogTitle = "SampleTitle";
    @Output() refreshTable = new EventEmitter<any>();


    constructor(
        public dialogRef: MatDialogRef<EmployeeModalComponent>,
        @Inject(MAT_DIALOG_DATA) data: any,
        private tranService:TransactionService,
        public empRegServ: EmployeeRegistrationService
    ) {

        console.log(data);
        this.formConfig = {
            model: data.config.model,
            formGroup: data.config.formGroup,
            formOptions: data.config.formOptions,
            formFields: data.config.formFields
        }

        // this.formConfig.formOptions.formState.selectOptions.positionOptions = [];



    }


    OnSubmit() {
        this.empRegServ.model = {
            firstName: this.formConfig.model['first_name'],
            lastName: this.formConfig.model['last_name'],
            position: this.formConfig.model['position_id']
        }


    }

    onClose() {
        this.dialogRef.close();
    }


    OnRegister(){
     this.tranService.InsertEmployee(this.empRegServ.model).subscribe(res=>{

        this.dialogRef.close();
     });
    }



}