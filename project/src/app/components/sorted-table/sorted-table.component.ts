import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-sorted-table',
  templateUrl: './sorted-table.component.html',
  styleUrls: ['./sorted-table.component.css']
})
export class SortedTableComponent implements OnInit {

  clickCounter=0;
  displayedColumns: string[] = ['column1', 'column2', 'column3', 'column4', 'column5', 'column6'];
  public dataSource = new MatTableDataSource([
    { column1: 'Row 1 Column 1', column2: 'Row 1 Column 2', column3: 'Row 1 Column 3', column4: 'Row 1 Column 4', column5: 'Row 1 Column 5', column6: 'Row 1 Column 6' },
    { column1: 'Row 2 Column 1', column2: 'Row 2 Column 2', column3: 'Row 2 Column 3', column4: 'Row 2 Column 4', column5: 'Row 2 Column 5', column6: 'Row 2 Column 6'},
    { column1: 'Row 3 Column 1', column2: 'Row 3 Column 2', column3: 'Row 3 Column 3',column4: 'Row 2 Column 4', column5: 'Row 2 Column 5', column6: 'Row 2 Column 6' },
    { column1: 'Row 4 Column 1', column2: 'Row 4 Column 2', column3: 'Row 4 Column 3', column4: 'Row 4 Column 4', column5: 'Row 4 Column 5', column6: 'Row 4 Column 6'},
    { column1: 'Row 5 Column 1', column2: 'Row 5 Column 2', column3: 'Row 5 Column 3', column4: 'Row 5 Column 4', column5: 'Row 5 Column 5', column6: 'Row 5 Column 6' },
    { column1: 'Row 6 Column 1', column2: 'Row 6 Column 2', column3: 'Row 6 Column 3', column4: 'Row 6 Column 4', column5: 'Row 6 Column 5', column6: 'Row 6 Column 6' },
  ]);
   array= [{clickCounter:0},{clickCounter:0},{clickCounter:0},{clickCounter:0},{clickCounter:0},{clickCounter:0}]
  @ViewChild(MatSort, { static: true }) sort!: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
  onclick(index:number){
    console.log(this.array[index].clickCounter)
    if(this.array[index].clickCounter===2)
    this.array[index].clickCounter=0;
    else
    this.array[index].clickCounter++;

  }

}
