import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Assignment1Component } from './assignment1/assignment1.component';
import { Assignment2Component } from './assignment2/assignment2.component';
import { Assignment3Component } from './assignment3/assignment3.component';
import { Assignment3ChildOneComponent } from './assignment3-child-one/assignment3-child-one.component';
import { Assignment3ChildTwoComponent } from './assignment3-child-two/assignment3-child-two.component';
import { SComponent } from './s/s.component';
import { Assignment3ChildThreeComponent } from './assignment3-child-three/assignment3-child-three.component';
import { Assignment3ChildFourComponent } from './assignment3-child-four/assignment3-child-four.component';

@NgModule({
  declarations: [
    AppComponent,
    Assignment1Component,
    Assignment2Component,
    Assignment3Component,
    Assignment3ChildOneComponent,
    Assignment3ChildTwoComponent,
    SComponent,
    Assignment3ChildThreeComponent,
    Assignment3ChildFourComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
