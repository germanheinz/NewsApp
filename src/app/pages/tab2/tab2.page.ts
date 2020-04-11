import { Component, ViewChild, OnInit } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { NewsService } from '../../services/news.service';

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

  news: Article [] = [];

  constructor(private newService: NewsService) {}

  ngOnInit(): void {
    this.segment.value = this.categories[0];
    this.loadNews(this.categories[0]);
  }
  //When tha segment value changed, function will be called
  changeCategory(event) {
    this.news = [];
    this.loadNews(event.detail.value);
  }
  
  loadNews(category: string) {
    this.newService.getTopHeadLinesCategories( category )
    .subscribe(resp => {
      console.log(resp);
      this.news.push(...resp.articles);
    });
  }


}
