import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment2',
  templateUrl: './assignment2.component.html',
  styleUrls: ['./assignment2.component.scss']
})
export class Assignment2Component implements OnInit {
  productList=[
    {name:'Item1',price:70},
    {name:'Item2',price:20},
    {name:'Item3',price:30},
    {name:'Item4',price:50},
    {name:'Item5',price:100},
    {name:'Item6',price:45},
    {name:'Item7',price:120},
    {name:'Item8',price:340},
    {name:'Item9',price:250},
    {name:'Item10',price:180},
    {name:'Item11',price:370},
    {name:'Item12',price:290}
  ];
  selectedDevice:any;
  viewType='Grid'
  showGrid=true;

  onChange(event:any){
    this.selectedDevice=event.target.value;
    if(this.selectedDevice=='Low to High'){
      this.productList.sort((a, b) => a.price - b.price);
    }
    else
    if(this.selectedDevice=='High to low'){
      this.productList.sort((a, b) => b.price - a.price);
    }
    }
    changeView(viewType:any){
      if(viewType=='Grid'){
        this.showGrid=true;
      }
      else{
        this.showGrid=false;
      }
      
    }
  constructor() { }

  ngOnInit(): void {
    this.productList.sort((a, b) => a.price - b.price);
  }

}
