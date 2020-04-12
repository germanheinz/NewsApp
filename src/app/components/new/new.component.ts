import { Component, OnInit, Input } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss'],
})
export class NewComponent implements OnInit {
  @Input() article: Article;
  @Input() index: number;
  constructor(private iab: InAppBrowser) { }

  ngOnInit() {}
  
  openNew(){
    console.log('News', this.article.url);
    const browser = this.iab.create(this.article.url, '_system');
  }

}
