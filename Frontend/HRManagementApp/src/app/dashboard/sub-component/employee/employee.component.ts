import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { FormlyFieldConfig, FormlyFormOptions } from "@ngx-formly/core";
import { EmployeeConfig } from "src/app/data/configs/employee.config";
import { TransactionService } from "../../services/transaction.service";
import { EmployeeModalComponent } from "./modal/employee-modal.component";




@Component({
    selector: 'employee-component',
    templateUrl: './employee.component.html',
    styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit, AfterViewInit {


    @ViewChild(MatPaginator) paginator: MatPaginator;

    displayedColumns: string[] = ['first_name', 'last_name', 'position_name'];

 
    DATA: any[] = [];
    dataSource = new MatTableDataSource<any>(this.DATA);

    positionsList: any[] = [];

    config: {
        model: any,
        formGroup: FormGroup,
        formOptions: FormlyFormOptions,
        formFields: FormlyFieldConfig[]
    }

    constructor(
        public dialog: MatDialog,
        formConfig: EmployeeConfig,
        private tranService: TransactionService
    ) {
        this.config = {
            model: formConfig.model,
            formGroup: formConfig.employeeFormGroup,
            formOptions: formConfig.employeeFormOptions,
            formFields: formConfig.employeeFormFields
        }
    }
    ngAfterViewInit(): void {
        this.dataSource.paginator = this.paginator;
    }

    ngOnInit(): void {
      
        this.FetchAllEmployee();
        this.GetAllPosition();
    }


    FetchAllEmployee(){
        this.tranService.GetAllEmployee().subscribe(res=>{
            console.log(res);
            this.dataSource.data = res;
        })
    }


    GetAllPosition() {

        this.tranService.GetAllPosition().subscribe(res => {
            res.map((x: any) => {
                this.positionsList.push({ value: x['id'], label: x['position_name'] });
            })
        });

        this.config.formOptions.formState.selectOptions.positionOptions = this.positionsList;

    }


    OpenDialog() {
        const dialogRef = this.dialog.open(EmployeeModalComponent, {
            width: '50%',
            height: '80%',
            disableClose: false,
            data: {
                name: "sample",
                refreshTable: this.refreshTable,
                config: this.config
            }
        });



    }

    refreshTable() { }



}