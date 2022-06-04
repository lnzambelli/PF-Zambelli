import { Student } from 'src/app/models/student';
import { AfterContentInit, Component, ContentChild, ContentChildren, EventEmitter, Input, OnDestroy, OnInit, Output, QueryList, ViewChild } from '@angular/core';
import { MatColumnDef, MatHeaderRowDef, MatNoDataRow, MatRowDef, MatTable } from '@angular/material/table';
import { StudentsService } from 'src/app/services/students.service';
import { filter } from 'rxjs/operators';
import { from, Observable } from 'rxjs';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements AfterContentInit, OnDestroy {

  @Input() contentTable!: Student[];
  @Input() headersTable!: string[]; 

  @Output() studentDelete = new EventEmitter<Student>();
  @Output() studentEdit = new EventEmitter<Student>();

  @ContentChildren(MatHeaderRowDef) headerRowDefs!: QueryList<MatHeaderRowDef>;
  @ContentChildren(MatRowDef) rowDefs!: QueryList<MatRowDef<any>>;
  @ContentChildren(MatColumnDef) columnDefs!: QueryList<MatColumnDef>;
  @ContentChild(MatNoDataRow) noDataRow!: MatNoDataRow;

  @ViewChild(MatTable, {static: true}) table!: MatTable<any>;

  arrEncontrados: Student[] = []

  constructor(private studentsService: StudentsService) { }

  deleteStudents(student: Student){
      this.studentDelete.emit(student)
  }

  editStudents(student: Student){
    this.studentEdit.emit(student)
  }

  ngAfterContentInit() {
    this.columnDefs.forEach(columnDef => this.table.addColumnDef(columnDef));
    this.rowDefs.forEach(rowDef => this.table.addRowDef(rowDef));
    this.headerRowDefs.forEach(headerRowDef => this.table.addHeaderRowDef(headerRowDef));
    this.table.setNoDataRow(this.noDataRow);
  }

  applicarFiltro(e: any){
    this.arrEncontrados =  []
    let arr: Student[] =[]
    this.studentsService.getStudents().subscribe(datos => arr= datos).unsubscribe()
   
    const obs = from(arr)
    const obsFilter = obs.pipe(
      filter((data: any)=> data.name.toLowerCase().includes(e.target.value.toLowerCase()))
    )
    
    const suscrip = obsFilter.subscribe(val=> this.arrEncontrados.push(val)) 
    suscrip.unsubscribe()
    if(e.target.value==''){
      this.arrEncontrados = []
    }
    
  }

  ngOnDestroy(): void {
   
  }
}
