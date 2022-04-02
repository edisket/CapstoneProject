import { Component, Inject, Output, EventEmitter } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
    selector:'employee-modal',
    templateUrl:'./employee-modal.component.html',
    styleUrls:['./employee-modal.component.scss']
})
export class EmployeeModalComponent{


    dialogTitle ="SampleTitle";
    @Output() refreshTable = new EventEmitter<any>();


    constructor(
        public dialogRef:MatDialogRef<EmployeeModalComponent>,
        @Inject(MAT_DIALOG_DATA) data: any
    ){}


    onClose(){
        this.dialogRef.close();
    }



}