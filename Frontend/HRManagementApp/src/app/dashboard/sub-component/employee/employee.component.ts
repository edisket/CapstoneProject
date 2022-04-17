import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { FormlyFieldConfig, FormlyFormOptions } from "@ngx-formly/core";
import { EmployeeConfig } from "src/app/data/configs/employee.config";
import { TransactionService } from "../../services/transaction.service";
import { EmployeeModalComponent } from "./modal/employee-modal.component";


const ELEMENT_DATA: any[] = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];


@Component({
    selector: 'employee-component',
    templateUrl: './employee.component.html',
    styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {


    @ViewChild(MatPaginator) paginator: MatPaginator;

    displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];

    dataSource = new MatTableDataSource<any>(ELEMENT_DATA);


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

    ngOnInit(): void {
        this.dataSource.paginator = this.paginator;
        this.GetAllPosition();
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