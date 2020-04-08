import { Component } from '@angular/core';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.newsService.getHeadLines().subscribe(resp => {
        console.log('Resp ', resp);
    });
  }

}
