import { Component, ViewChild, OnInit } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{

  // Q1: How can I remember de tab by default?
  // A1: The key is recived the value in .html
  @ViewChild(IonSegment, null) segment: IonSegment;

  categories = [
    'business',
    'entertainment',
    'general',
    'health',
    'science',
    'sports',
    'technology',
  ];
  ngOnInit(): void {
    this.segment.value = this.categories[0];
  }

  constructor() {}

}
