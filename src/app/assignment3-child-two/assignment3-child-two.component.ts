import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment3-child-two',
  templateUrl: './assignment3-child-two.component.html',
  styleUrls: ['./assignment3-child-two.component.scss']
})
export class Assignment3ChildTwoComponent implements OnInit {

  inputValue:any;
  newYearCountdown:any;
  constructor() { }
  counter=0;
  count=0;
  startCount=0;
  pauseCount=0;
  ans=0;
  ngOnInit(): void {}
  startStopTimer(){
    this.count=this.count+1;
    if(this.count==1){
      this.ans=this.inputValue;    
      this.inputValue='';
    }
    if(this.count%2!=0){
      console.log('insde if',this.ans);
      this.counter = this.ans;
      this.startCount++; 
      this.newYearCountdown=setInterval(()=>{
      this.counter = this.counter-1;
      }, 1000);
    }
    else{
      this.pauseCount++;
      this.ans=this.counter;
      console.log('insde else',this.ans);
      clearTimeout(this.newYearCountdown);
    }
 }
  clear(){
   this.counter=0;
   this.count=0;
   this.pauseCount=0;
   this.startCount=0;
   clearInterval(this.newYearCountdown);
  }

}
