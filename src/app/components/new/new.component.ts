import { Component, OnInit, Input } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { ActionSheetController, Platform } from '@ionic/angular';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { DataLocalService } from '../../services/data-local.service';


@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss'],
})
export class NewComponent implements OnInit {
  @Input() article: Article;
  @Input() index: number;
  @Input() inFavourites;

  constructor(private iab: InAppBrowser,
              private actionSheetController: ActionSheetController,
              private socialSharing: SocialSharing,
              private dataLocal: DataLocalService,
              private platform: Platform) { }

  ngOnInit() {}

  openNew() {
    console.log('News', this.article.url);
    const browser = this.iab.create(this.article.url, '_system');
  }
  async openMenu() {
    let deleteButton;
    if (this.inFavourites) {
        deleteButton = {
        text: 'Trash',
        icon: 'trash',
        cssClass: 'action-dark',
        handler: () => {
          console.log('Trash clicked');
          this.dataLocal.deleteNew(this.article);
        }
      };
    } else {
      deleteButton = {
        text: 'Favorite',
        icon: 'heart',
        cssClass: 'action-dark',
        handler: () => {
          console.log('Favorite clicked');
          this.dataLocal.saveNews(this.article);
        }
      };
    }
    const actionSheet = await this.actionSheetController.create({
      buttons: [ {
        text: 'Share',
        icon: 'share',
        cssClass: 'action-dark',
        handler: () => {
          console.log('Share clicked');
          this.shareNews();
        }
      },
      deleteButton,
      {
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
  shareNews() {
    if (this.platform.is('cordova')) {
      this.socialSharing.share(
        this.article.title,
        this.article.source.name,
        '',
        this.article.url
      );
      } else {
        if (navigator['share']) {
          navigator['share']({
            title: this.article.title,
            text: this.article.description,
            url: this.article.url,
          })
          .then(() => console.log('Share it'))
          .catch((error) => console.log('error'));
        }
    }
  }

}
