import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-my-search-options',
  templateUrl: './my-search-options.component.html',
  styleUrls: ['../generic-table/generic-table.component.css','./my-search-options.component.css']
})
export class MySearchOptionsComponent {
  @Input()graphName?:string;
  @Input()isDarkModeActive?:boolean;
  @Input()ngClassForBtns?:{}={'deep-blue-btn':this.isDarkModeActive};
  @Input()dropdownVisible?:boolean;
  @Input()searchText: string ='';
  @Input()tablesData: any;
  @Input() filteredData: any[] | undefined;
  @Input()selectedOption: any;
  @Input()showResults: boolean | undefined;


  onInput() {

    let newArray;
    if (this.searchText.length > 0) {
      if(this.graphName=='lights')
       newArray=  this.tablesData.filter((value:any) =>value?.address?.includes(this.searchText))
     else{
     newArray=  this.tablesData.filter((value:any) =>value?.id?.includes(this.searchText))
     }



     if(newArray.length>0)
      this.showResults = true;
    } else {
      this.showResults = false;
    }
  }
  onInputClick(event: MouseEvent) {
    event.stopPropagation();
  }
  confirmSelectTable(option:string){

  }
  onResultClick(result: any,event:Event) {

     event.stopPropagation();
     if(this.graphName=='lights')
     this.searchText = result?.address;
     this.selectedOption=result?.address;

     if(this.graphName=='Vaccination'){
     this.searchText = result.id;
     this.selectedOption=result.id;
     }

     this.showResults = false;
     this.filterCites()

  }
  resetSearchValue(){
  if(this.searchText=='')
  this.filteredData =[...this.tablesData];
  }

  filterCites(){
    if(this.graphName=='lights')
    this.filteredData=this.tablesData.filter((c:any)=>c.address==this.searchText)
    if(this.graphName=='Vaccination')
    this.filteredData=this.tablesData.filter((c:any)=>c.id==this.searchText)

  }
}
