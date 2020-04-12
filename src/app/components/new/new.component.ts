import { Component, OnInit, Input } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss'],
})
export class NewComponent implements OnInit {
  @Input() article: Article;
  @Input() index: number;
  constructor(private iab: InAppBrowser, public actionSheetController: ActionSheetController) { }

  ngOnInit() {}
  
  openNew() {
    console.log('News', this.article.url);
    const browser = this.iab.create(this.article.url, '_system');
  }
  async openMenu() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Albums',
      buttons: [ {
        text: 'Share',
        icon: 'share',
        cssClass: 'action-dark',
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Favorite',
        icon: 'heart',
        cssClass: 'action-dark',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        cssClass: 'action-dark',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

}
